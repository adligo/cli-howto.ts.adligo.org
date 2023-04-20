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
const { spawn, spawnSync } = require('child_process')
const { stream  } = require('stream'); 


class CliArgParser {

  constructor() {

    console.log('There are ' + process.argv.length + ' command line arguments');
    var sync = true;
    for (var i=0; i< process.argv.length; i++) {
      console.log('cli arg ' + i + ' is ' + process.argv[i]);
      if ("--async" == process.argv[i]) {
        sync = false;
      }
    }
    if (sync) {
      //sync
      console.log('running pwd sync');
      try {
        let pwd = spawnSync('pwd',[]);
        console.log('pwd output is: ' + pwd.output);
      } catch (e) {
        console.error(`pwd error: ${e}`);
      }
    } else {
      //async pwd
      console.log('running pwd async');
      let pwd = spawn('pwd');
      pwd.stdout.on('data', (data) => {
        console.log('running in ' + data);
      });
      pwd.stderr.on('pwd stderr data', (data) => {
        console.error('pwd stderr data ' + data);
      });
      pwd.on('pwd error', (error) => {
        console.error(`pwd error: ${error.message}`);
      });
    }
  }
}

console.log('hello cli-howto ');
new CliArgParser();
console.log('CliArgParser created');