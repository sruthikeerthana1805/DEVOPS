# Experiment 4 – Jenkins Installation and Setup (Ubuntu)

Jenkins is an automation server used for continuous integration and delivery. Run the following on Ubuntu. Use the current Jenkins documentation if repository-key commands change.

```bash
sudo apt update
sudo apt install fontconfig openjdk-21-jre -y
java -version
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update
sudo apt install jenkins -y
sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins
```

Open http://localhost:8080. Get the initial password:
```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
Paste it into **Unlock Jenkins**, install suggested plugins, create the first administrator user, and open the dashboard.
