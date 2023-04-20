#! /usr/bin/env node
/**
  * Copyright 2023 Adligo Inc / Scott Morgan
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

const { spawn } = require('child_process')

class CliArgParser {

  constructor() {
    let pwd = spawn('pwd');
    pwd.stdout.on('data', (data) => {
      console.log('running in ' + data);
    });
    pwd.stderr.on('pwd stderr data', (data) => {
      console.log('pwd stderr data ' + data);
    });
    pwd.on('pwd error', (error) => {
      console.log(`pwd error: ${error.message}`);
  });
    console.log('There are ' + process.argv.length + ' command line arguments');
    for (var i=0; i< process.argv.length; i++) {
      console.log('cli arg ' + i + ' is ' + process.argv[i]);
    }
  }
}

console.log('hello cli-howto ');
new CliArgParser();
console.log('CliArgParser created');