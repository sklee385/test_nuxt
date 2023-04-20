module.exports = {
	apps: [
		{
			name: "front_we_novelpia",
			// package.json에 정의된 npm run start를 실행하게 해서 PM2로 관리하게 한다.
			script: "npm", // 앱 실행 스크립트
			args: "run serve", // 앱 실행 스크립트 인자
			// instances: "max", // 인스턴스 갯수
			autorestart: true, // 자동 재시작 여부
			watch: false, // 파일 변경시 reload
			// max_memory_restart: "1G",
			// 개발 환경에서 적용될 설정
			// pm2 start ecosystem.config.js
			env: {
				HOST: "0.0.0.0",
				PORT: 3000,
				NODE_ENV: "development",
			},
			// 배포 환경에서 적용될 설정
			// pm2 start ecosystem.config.js --env production
			env_production: {
				HOST: "0.0.0.0",
				PORT: 3000,
				NODE_ENV: "production",
			},
			output: "./logs/console.log", // 로그
			error: "./logs/consoleError.log", // 로그 에러
		},
	],
	/**
	 * 배포 설정
	 */
	/* 
	deploy: {
        production: {
            user: "ec2-user", // 접속할 계정
			host: "sklee1.snowtoon.com", // 도메인 또는 IP
			ref: "origin/master", // git 브론치
			repo: "git@github.com:sklee385/test_nuxt.git", // git 주소
			path: "/home/ec2-user/test/front", // 앱을 설치할 폴더 위치
			// PM2가 배포(git clone)한 후 실행할 명령어
			"post-deploy": "npm install && pm2 reload ecosystem.config.js --env production",
		},
	},
    */
};
