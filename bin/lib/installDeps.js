const execa = require('execa')
const readline = require('readline')
const chalk = require('chalk')
const { resolveProjectPath } = require('./utils')

module.exports = () => {
  return new Promise((resolve, reject) => {
    const child = execa('yarn', [], {
      cwd: resolveProjectPath(),
      stdio: ['inherit', 'inherit', 'pipe']
    })

    child.stderr.on('data', buf => {
      const str = buf.toString()
      if (/warning/.test(str)) {
        return
      }

      // progress bar
      const progressBarMatch = str.match(/\[.*\] (\d+)\/(\d+)/)
      if (progressBarMatch) {
        renderProgressBar(progressBarMatch[1], progressBarMatch[2])
        return
      }

      process.stderr.write(buf)
    })

    child.on('close', code => {
      if (code) {
        console.log('')
        console.log('yarn install 失败')
        reject()
      }
      resolve()
    })

    function renderProgressBar(curr, total) {
      const ratio = Math.min(Math.max(curr / total, 0), 1)
      const bar = ` ${curr}/${total}`
      const availableSpace = Math.max(
        0,
        process.stderr.columns - bar.length - 3
      )
      const width = Math.min(total, availableSpace)
      const completeLength = Math.round(width * ratio)
      const complete = `#`.repeat(completeLength)
      const incomplete = `-`.repeat(width - completeLength)
      toStartOfLine(process.stderr)
      process.stderr.write(`[${complete}${incomplete}]${bar}`)
    }

    function toStartOfLine(stream) {
      if (!chalk.supportsColor) {
        stream.write('\r')
        return
      }
      readline.cursorTo(stream, 0)
    }
  })
}
