# Experiment 3 – Source Code Management on GitHub

This experiment uses the Event Registration source code from Experiment 1.

## First-time upload
```bash
git init
git add .
git commit -m "Add event registration application"
git branch -M main
git remote add origin https://github.com/USERNAME/EventManager.git
git push -u origin main
```

## Later updates
```bash
git status
git add .
git commit -m "Update event registration"
git push
```

## Clone on another computer
```bash
git clone https://github.com/USERNAME/EventManager.git
cd EventManager
code .
```

If the repository already has a remote, do not add it again; use `git remote -v` to check.
