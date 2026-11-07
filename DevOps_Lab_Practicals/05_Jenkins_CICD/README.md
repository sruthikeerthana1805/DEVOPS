# Experiment 5 – CI/CD using Jenkins

1. Open Jenkins at http://localhost:8080.
2. Select **New Item**, enter `DevOps-CICD`, choose **Pipeline**, and click OK.
3. In the Pipeline section, choose **Pipeline script**.
4. Copy the contents of `Jenkinsfile` into the script box and save.
5. Click **Build Now**.
6. Open **Console Output** and verify each stage. A successful run ends with `Finished: SUCCESS`.

This sample pipeline demonstrates Build, Test, Package, and Deploy stages. The deploy stage is a lab demonstration, not a production deployment.
