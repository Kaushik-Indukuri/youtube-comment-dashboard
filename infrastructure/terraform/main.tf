provider "aws" {
  region = "us-west-1"  # AWS region
}

resource "aws_security_group" "kafka_sg" {
  name        = "kafka-sg"
  description = "Allow Kafka traffic"

# For ssh access
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

# For zookeeper to coordinate and manage the Kafka brokers
  ingress {
    from_port   = 2181
    to_port     = 2181
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

# Kafka clients (producers and consumers) connect to the broker on this port
  ingress {
    from_port   = 9092
    to_port     = 9092
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

# Allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "kafka" {
  ami           = "ami-01887e957bc39aaca"  # Amazon Linux 2 AMI
  instance_type = "t2.micro"  # Instance type
  key_name      = "kafka-key"  # Replace with your key pair name
  security_groups = [aws_security_group.kafka_sg.name]

  tags = {
    Name = "Kafka-Server"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install -y java-17-amazon-corretto
              sudo wget https://downloads.apache.org/kafka/3.7.1/kafka_2.13-3.7.1.tgz
              sudo tar -xzf kafka_2.13-3.7.1.tgz
              sudo mv kafka_2.13-3.7.1 /opt/kafka

              cd /

              # Update server.properties
              public_ip=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)

              sudo sed -i "s|^#advertised.listeners=PLAINTEXT://your.host.name:9092|advertised.listeners=PLAINTEXT://$public_ip:9092|" /opt/kafka/config/server.properties

              
              # Set heap options
              sudo sed -i 's|export KAFKA_HEAP_OPTS="-Xmx1G -Xms1G"|export KAFKA_HEAP_OPTS="-Xmx256M -Xms128M"|' /opt/kafka/bin/kafka-server-start.sh


              # Start Zookeeper and Kafka
              sudo /opt/kafka/bin/zookeeper-server-start.sh /opt/kafka/config/zookeeper.properties &
              sudo /opt/kafka/bin/kafka-server-start.sh /opt/kafka/config/server.properties &

              # Wait for Kafka to start (5 sec)
              sleep 5

              # Create youtube-comments topic
              sudo /opt/kafka/bin/kafka-topics.sh --create --topic youtube-comments --bootstrap-server $public_ip:9092 --partitions 1 --replication-factor 1
              EOF
}

output "kafka_public_ip" {
  value = aws_instance.kafka.public_ip
}
