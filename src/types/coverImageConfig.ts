export type CoverImageConfig = {
	enableInPost: boolean; // 是否在文章详情页显示封面图
	enableInPostOverlay?: boolean; // 是否使用标题和元数据叠加在封面上的布局
	showLoading?: boolean; // 是否显示加载动画
	defaultImage?: string; // 未指定封面时的默认封面图（public 目录绝对路径），留空则无封面时不显示
	randomCoverImage: {
		enable: boolean; // 是否启用随机图功能
		apis: string[]; // 随机图API列表
	};
};
