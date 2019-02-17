# setup.py

from distutils.core import setup, Extension


example_module = Extension('_example', sources=['example.c', 'example.i'])

setup(name='example', ext_modules=[example_module], py_modules=["example"])
