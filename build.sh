echo '1. Cleaning dist folder'
rm -rf dist

echo '2. Compilation...'
tsc

echo '3. Copy dt function...'
cp src/dt.ts dist

echo '4. Copy production README'
cp README.md dist

echo '5. Copy package.json file'
cp package.json dist

echo 'Build process completed successfully!'