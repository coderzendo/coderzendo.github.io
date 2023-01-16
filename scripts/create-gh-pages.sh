#/bin/bash

# sudo apt-get install ruby-full build-essential zlib1g-dev

# echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
# echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
# echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
# source ~/.bashrc

# gem install jekyll bundler

# Create a branch called gh-pages, with no history or contents, 
# and switch to it.
git checkout --orphan gh-pages

# Delete original code from your default 
# branch.
git rm -rf .

# Create a Jekyll site
jekyll new --skip-bundle .

# Get version number here: https://pages.github.com/versions/
gem "github-pages", "~> 227", group: :jekyll_plugins

bundle install