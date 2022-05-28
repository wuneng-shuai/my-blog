module.exports = {
	title: '帅',
	description: '一个喜欢唱歌的前端',
	dest: 'dist',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: 'https://pan.zealsay.com/blog/favicon.ico',
			},
		],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no',
			},
		],
		[
			'script',
			{},
			`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `,
		], //百度统计
	],
	locales: {
		'/': {
			lang: 'zh-CN',
		},
	},
	theme: 'reco',
	themeConfig: {
		nav: [
			{
				text: 'Home',
				link: '/',
				icon: 'reco-home',
			},
			{
				text: 'TimeLine',
				link: '/timeline/',
				icon: 'reco-date',
			},
			// {
			// 	text: '电子书',
			// 	icon: 'reco-message',
			// 	items: [
			// 		{
			// 			text: 'vuepress-reco',
			// 			link: '/docs/theme-reco/',
			// 		},
			// 	],
			// },
			// {
			// 	text: '面试题总结',
			// 	icon: 'reco-message',
			// 	items: [
			// 		{
			// 			text: 'vuepress-reco',
			// 			link: '/docs/Interview/',
			// 		},
			// 	],
			// },
		],
		// sidebar: {
		// 	'/docs/Interview/': ['','js.md'],
		// },
		type: 'blog',
    // sidebar: {
    //   description:true,
    // },
    sidebar: 'auto',
		blogConfig: {
			category: {
				location: 2,
				text: '博客',
			},
			tag: {
				location: 3,
				text: '标签',
			},
		},
		logo: 'https://pan.zealsay.com/avatar/20200606105310570000000.jpg',
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: 'Last Updated',
		author: '帅',
		authorAvatar:
			'https://pan.zealsay.com/avatar/20200606105310570000000.jpg',
		record: '浙ICP备2022011791号 ', //icp备案
		startYear: '2022',
		info: '一个喜欢唱歌的垃圾前端',
		startYear: '2022',
		mottos: [
			{
				zh: '愿你保持初心和善良,笑里尽是温暖与坦荡。',
				// "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
			},
			{
				zh: '年轻就是无限的可能。',
				// "en": "Youth means limitless possibilities."
			},
			{
				zh: '真正的梦就是现实的彼岸。',
				// "en": "Real dream is the other shore of reality."
			},
			{
				zh: '不为模糊不清的未来担忧，只为清清楚楚的现在努力。',
				// "en": "Don't worry about the vague future, just strive for the clear present."
			},
			{
				zh: '与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。',
				// "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
			},
			{
				zh: '上天是公平的，只要努力就会有收获，否则就是你不够努力。',
				// "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
			},
			{
				zh: '人生没有后悔，我们只能尽力去不让自己后悔。',
				// "en": "Life without regret, we can only do our best to not to regret."
			},
		],
		covers: [
			'https://pan.zealsay.com/zealsay/cover/7.jpg',
			'https://pan.zealsay.com/zealsay/cover/1.jpg',
			'https://pan.zealsay.com/zealsay/cover/2.jpg',
			'https://pan.zealsay.com/zealsay/cover/3.jpg',
			'https://pan.zealsay.com/zealsay/cover/4.jpg',
			'https://pan.zealsay.com/zealsay/cover/5.jpg',
			'https://pan.zealsay.com/zealsay/cover/6.jpg',
		],
		codeTheme: 'tomorrow',
	},
	// markdown: {
	// 	lineNumbers: false,
	// },
	configureWebpack: {
		node: {
			global: true,
			process: true,
		},
	},
	plugins: [
		['@vuepress-reco/extract-code'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
      }
  }],
  ['@vuepress-reco/vuepress-plugin-kan-ban-niang',{
      theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
      clean:true
    }
  ],
		// '@vuepress/nprogress':false, //默认为true，设置为false可以关闭进度条
		[
			'vuepress-plugin-nuggets-style-copy',
			{
				copyText: '复制代码',
				tip: {
					content: '复制成功',
				},
			},
		],
		['copyright',	{
				authorName: '帅', // 选中的文字将无法被复制
				minLength: 30, // 如果长度超过  30 个字符
			},
		],
		['@vuepress-reco/vuepress-plugin-bgm-player',	{
				audios: [
					// 本地文件示例
					// 网络文件示例
					{
						name: '千千阙歌 ',
						artist: '声生不息',
						url: 'https://626c-blog-0g0xw2qs8a6c2772-1307366445.tcb.qcloud.la/QQ%E9%9F%B3%E4%B9%90/%E5%8D%8E%E8%AF%AD%E7%BE%A4%E6%98%9F-%E5%8D%83%E5%8D%83%E9%98%99%E6%AD%8C%20(Live).mp3?sign=1f1c51a40906fd08b57909a84fb0bf32&t=1652708178',
						cover: 'https://assets.smallsunnyfox.com/music/2.jpg',
					},
					{
						name: '蓝色土耳其',
						artist: '周传雄',
						url: 'https://626c-blog-0g0xw2qs8a6c2772-1307366445.tcb.qcloud.la/QQ%E9%9F%B3%E4%B9%90/%E5%91%A8%E4%BC%A0%E9%9B%84-%E8%93%9D%E8%89%B2%E5%9C%9F%E8%80%B3%E5%85%B6.mp3?sign=e7229f403e8a42dd2b6495801385f73b&t=1652708266',
						cover: 'https://assets.smallsunnyfox.com/music/3.jpg',
					},
					{
						name: '寂寞沙洲冷（自愈版）',
						artist: '李莹小熊',
						url: 'https://626c-blog-0g0xw2qs8a6c2772-1307366445.tcb.qcloud.la/QQ%E9%9F%B3%E4%B9%90/%E6%9D%8E%E8%8E%B9%E5%B0%8F%E7%86%8A-%E5%AF%82%E5%AF%9E%E6%B2%99%E6%B4%B2%E5%86%B7%EF%BC%88%E8%87%AA%E6%84%88%E7%89%88%EF%BC%89.mp3?sign=7766a92793c29eef56987a17d738ed27&t=1652708339',
						cover: 'https://assets.smallsunnyfox.com/music/1.jpg',
					},
					{
						name: '想某人',
						artist: '王优秀,白嘉峻,何文靖',
						url: 'https://626c-blog-0g0xw2qs8a6c2772-1307366445.tcb.qcloud.la/QQ%E9%9F%B3%E4%B9%90/%E7%8E%8B%E4%BC%98%E7%A7%80%2C%E7%99%BD%E5%98%89%E5%B3%BB%2C%E4%BD%95%E6%96%87%E9%9D%96-%E6%83%B3%E6%9F%90%E4%BA%BA%20(%E5%90%88%E5%94%B1%E7%89%88).mp3?sign=8d606915551995e3d513a6b93bf2acff&t=1652708356',
						cover: 'https://assets.smallsunnyfox.com/music/4.jpg',
					},
				],
				// 是否默认缩小
				autoShrink: true,
				// 缩小时缩为哪种模式
				shrinkMode: 'float',
				// 悬浮窗样式
				floatStyle: { bottom: '10px', 'z-index': '999999' },
			},
		],
	],
};
