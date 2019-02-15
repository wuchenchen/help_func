1. python-config --cflags
to get the full set of recommended compilation flags:

-I/Users/myuser/anaconda3/include/python3.6m
-I/Users/myuser/anaconda3/include/python3.6m
-Wno-unused-result -Wsign-compare -Wunreachable-code -DNDEBUG -g -fwrapv -O3 -Wall -Wstrict-prototypes
-I/Users/myuser/anaconda3/include -arch x86_64
-I/Users/myuser/anaconda3/include -arch x86_64

2. swig -python example.i

3. gcc -c -I/Users/myuser/anaconda3/include/python3.6m example.c example_wrap.c

4. gcc -bundle -undefined dynamic_lookup -L/Users/myuser/anaconda3/lib example.o example_wrap.o -o _example.so

5. python test.py
