#!/bin/bash
#
# by Charlie Calvert
#
# This work is licensed under a Creative Commons Attribution-ShareAlike 4.0
# International License. See https://creativecommons.org/licenses/by-sa/4.0 .
#
# -e: inserts text into the input file at a
# r: read a file
# d: delete

# Copy the contents of file a into file at a specific place
# It inserts **file a** into **index.html** at the word 'bar'
sed -e '/bar/r_includes/sign-in.html' public/index.html

# It inserts **file a** into **index.html** and replaces/deletes the word 'bar' 
sed -e '/bar/{r _includes/sign-in.html' -e 'd;}' public/index.html
exit 0