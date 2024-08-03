FROM jenkins/jenkins:latest

USER root

# Install the necessary packages
RUN apt-get update && apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

USER jenkins



# Run this command with Dot . included >>>      docker build -t my-jenkins-xvfb .
# Run this command to Create docker image>>>    docker run -d -p 8080:8080 -p 50000:50000 --name my-jenkins-xvfb my-jenkins-xvfb