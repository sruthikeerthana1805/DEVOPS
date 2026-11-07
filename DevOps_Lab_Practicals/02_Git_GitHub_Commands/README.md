# Experiment 2 – Explore Git and GitHub Commands

Run these commands in the project directory. Replace the sample name and email with your GitHub account details.

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global color.ui auto
git init
git status
git add README.md
git add .
git commit -m "first commit"
git log
git log --oneline
git branch
git switch -c feature/demo
git switch main
git merge feature/demo
git stash
git stash pop
git remote -v
git push -u origin main
```

For a first push, create an empty GitHub repository, then run:
```bash
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```
