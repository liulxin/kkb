#! /usr/bin/env node

// node cli 应用入口文件必须有这样的文件头
// 如果是linux 或者 macos 系统还需要修改此文件的读写权限 755
// chmod 755 cli.js

// 工作流程:
// 1. 通过命令行询问用户信息 inquirer
// 2. 根据用户回答的结果生成文件

const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'project name?'
  }
]).then(answer => {
  console.log(answer)

  const temlDir = path.join(__dirname, 'templates')

  const destDir = process.cwd()

  fs.readdir(temlDir, (err, files) => {
    if(err) throw err

    files.forEach(file => {
      // console.log(file)

      ejs.renderFile(path.join(temlDir, file), answer, (err, result) => {
        
        fs.writeFileSync(path.join(destDir, file), result)
      })
    })
  })
})