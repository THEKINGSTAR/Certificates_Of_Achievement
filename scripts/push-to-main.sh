#!/bin/bash

# Configure git
git config user.email "portfolio@certificates.dev"
git config user.name "Certificate Portfolio Builder"

# Add all changes
git add .

# Commit changes
git commit -m "feat: organize certificates and create stunning portfolio website

- Organized all certificates into 7 category folders with detailed READMEs
- Created responsive Next.js portfolio website
- Added hero section showcasing learning journey
- Implemented certificate gallery with filterable categories
- Added timeline visualization of learning progression
- Included skills showcase section
- Deployed with modern design and smooth animations"

# Push to main branch
git push origin main

echo "✓ Successfully pushed to main branch!"
