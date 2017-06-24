import execa from 'execa';
import { platform } from 'os';
import path from 'path';
import isGit from 'is-git-repository';
import pathIsAbsolute from 'path-is-absolute';

const cwd = process.cwd();

const getRemotes = (altPath = cwd) => {
  let remotes;
  const thisPath = pathIsAbsolute(altPath) ? altPath : path.join(cwd, altPath);

  if (!isGit(thisPath)) {
    return '';
  }

  try {
    let checkRemoteExec;
    if (platform() === 'win32') {
      checkRemoteExec = `pushd ${thisPath} & git remote -v`;
    } else {
      checkRemoteExec = `(cd ${thisPath} ; git remote -v)`;
    }

    remotes = execa.shellSync(checkRemoteExec).stdout;

    return remotes;
  } catch (err) {
    return '';
  }
};

export default getRemotes;
