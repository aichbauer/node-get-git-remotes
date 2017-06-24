import test from 'ava';
import path from 'path';
import { homedir } from 'os';
import fs from 'fs';

import getRemote from './index';

const fixtures = path.join(process.cwd(), 'test', 'fixtures');

test.before('move git to .git', async () => {
  await fs.renameSync(path.join(fixtures, 'repo-no-commits', 'git'), path.join(fixtures, 'repo-no-commits', '.git'));
});

test.after.always('move .git to git', async () => {
  await fs.renameSync(path.join(fixtures, 'repo-no-commits', '.git'), path.join(fixtures, 'repo-no-commits', 'git'));
});

test.serial('GET REMOTE | not empty', async (t) => {
  const cwd = process.cwd();

  const remote = await getRemote(cwd);

  t.not(remote, '');
});

test.serial('GET REMOTE | is empty', async (t) => {
  await process.chdir('test/fixtures/repo-no-commits');

  const cwd = process.cwd();
  const remote = await getRemote(cwd);

  t.is(remote, '');

  await process.chdir('../../..');
});

test.serial('GET REMOTE | error', async (t) => {
  const cwd = process.cwd();

  await process.chdir(homedir());

  const remote = await getRemote(homedir());

  t.is(remote, '');

  await process.chdir(cwd);
});

