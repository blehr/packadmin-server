# Pack Admin Backend

## Instructions

1. clone server-side as packAdmin
2. `cd packAdmin`
3. `rm -r client`  this deletes folder and all
4. clone client-side as client
5. `cd client`
6. `npm install` dependencies
7. check for proper link in app/actions/index.js `export const ROOT_URL = 'https://packadmin.com';`
8. `npm run build`
9. `cd ..`
10. `npm install` dependencies
11. check for proper link in containers/reset-password.js `const ROOT_URL = 'https://packadmin.com/reset/';`
12. `pm2 start startup.config.js`
13. `pm2 startup` to create startup script
14. `pm2 sav`e to save it
15. `sudo systemctl restart nginx` to restart nginx


### extras

* `crontab -e` to edit user cron
* `mail` to read mail, then enter message #
* `quit` exits and marks as read

