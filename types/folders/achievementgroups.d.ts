declare module "@PaimonApp/genshin-db" {
	export interface AchievementGroup {
		id: number;
		name: string;
		sortOrder: number;
		reward?: Rewards;
		images: {
			filename_icon: string;
		};

		version: string;
	}
}