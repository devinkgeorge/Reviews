module.exports = {
  apps: [
    {
      name: 'Amishon Reviews',
      script: 'server/server.js'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-213-253-99.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/Amishon.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Amishon/Reviews.git',
      path: '/home/ubuntu',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
