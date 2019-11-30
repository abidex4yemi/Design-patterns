class FS_PROXY {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, encoding, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Can only read markdown files."));
    }

    this.fs.readFile(path, encoding, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }
}

module.exports = FS_PROXY;
