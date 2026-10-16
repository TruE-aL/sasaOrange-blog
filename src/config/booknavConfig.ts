import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "music",
		name: "音乐",
		icon: "material-symbols:music-note-rounded",
		desc: "听歌、找曲、追同人音乐的常去之处",
		weight: 100,
		items: [
			{
				title: "sasakure.UK 官网",
				url: "https://sasakure.uk.com/",
				desc: "ササクレイト 官方站点",
				icon: "/favicon/sasakure-192.png",
			},
			{
				title: "YouTube Music",
				url: "https://music.youtube.com",
				desc: "在线流媒体听歌",
			},
			{
				title: "Bandcamp",
				url: "https://bandcamp.com",
				desc: "独立 / 同人音乐数字发行平台",
			},
			{
				title: "VGMdb",
				url: "https://vgmdb.net",
				desc: "游戏 / 同人音乐专辑数据库",
			},
			{
				title: "网易云音乐",
				url: "https://music.163.com",
				desc: "国内主流音乐平台",
			},
		],
	},
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-rounded",
		desc: "写页面与处理素材用的工具",
		weight: 90,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "全球最大的代码托管平台",
			},
			{
				title: "Astro",
				url: "https://astro.build",
				desc: "本站所使用的静态站点框架",
			},
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
				desc: "海量开源图标检索",
			},
			{
				title: "Squoosh",
				url: "https://squoosh.app",
				desc: "在线图片压缩",
			},
			{
				title: "Carbon",
				url: "https://carbon.now.sh",
				desc: "生成漂亮的代码截图",
			},
		],
	},
];
