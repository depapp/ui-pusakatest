# pusakatest
[![Build Status](https://travis-ci.com/depapp/pusakatest.svg?branch=main)](https://travis-ci.com/depapp/pusakatest)

pusakatest is an automation testing tool

## installation

make sure `node` & `npm` already installed on your machine using these commands
```bash
$ node -v
v14.15.1
```
```bash
$ npm -v
6.14.8
```
clone this code to your local machine
```bash
$ git clone https://github.com/depapp/pusakatest.git
```
then install the dependencies (change your directory first to `pusakatest` ~~_don't make a silly mistake_~~)
```bash
$ npm install
```

## usage

there are 2 platforms that can be executed by this tool, `web` & `android`

first thing first, you need to `copy` all files on `config` directory to your `pusakatest` root directory

- then you can run this command to run the `web` automation
```bash
$ npm run dev-web
```

## reporting

you have to make sure that `allure` is installed on your machine
```bash
$ allure --version
2.13.7
```
this command will show you the report of your latest execution
```bash
$ npm run report
```
