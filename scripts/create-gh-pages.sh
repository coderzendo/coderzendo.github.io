#/bin/bash

# Create a branch called gh-pages, with no history or contents, 
# and switch to it.
git checkout --orphan gh-pages

# Delete original code from your default 
# branch.
git rm -rf .
