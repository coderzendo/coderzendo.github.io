// cd -- "$(mktemp -d)" 
printf '%s\n' 'nuts' 'bolts' > first_file.txt
printf '%s\n' 'foo' 'bar' 'baz' > second_file.txt
sed -e '/bar/r./first_file.txt' second_file.txt