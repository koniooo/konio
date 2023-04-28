type hunterDatum = {
  nameJa: string;
  nameEn: string;
  primaryNameJa: string;
  primaryNameEn: string;
  primaryTime: number[];
  secondaryNameJa?: string;
  secondaryNameEn?: string;
  secondaryTime?: number[];
  tertiaryNameJa?: string;
  tertiaryNameEn?: string;
  tertiaryTime?: number[];
};
export const hunterData: readonly hunterDatum[] = [
  {
    nameJa: "復讐者",
    nameEn: "Hell Ember",
    primaryNameJa: "黄パペット",
    primaryTime: [20],
    secondaryNameJa: "赤パペット",
    secondaryTime: [20],
  },
  {
    nameJa: "道化師",
    nameEn: "Smiley Face",
    primaryNameJa: "ロケットダッシュ",
    primaryTime: [12],
  },
  {
    nameJa: "断罪狩人",
    nameEn: "Gamekeeper",
    primaryNameJa: "チェーンクロウ",
    primaryTime: [14],
  },
  {
    nameJa: "リッパー",
    nameEn: "The Ripper",
    primaryNameJa: "寒霧",
    primaryTime: [20],
  },
  {
    nameJa: "結魂者",
    nameEn: "Soul Weaver",
    primaryNameJa: "糸を吐く",
    primaryTime: [10],
  },
  {
    nameJa: "芸者",
    nameEn: "Geisha",
    primaryNameJa: "刹那生滅",
    primaryTime: [8],
  },
  {
    nameJa: "白黒無常",
    nameEn: "Wu Chang",
    primaryNameJa: "諸行無常",
    primaryTime: [30],
    secondaryNameJa: "吸魂",
    secondaryTime: [20],
    tertiaryNameJa: "揺魄",
    tertiaryTime: [15],
  },
  {
    nameJa: "写真家",
    nameEn: "Photographer",
    primaryNameJa: "写真世界",
    primaryTime: [60, 45],
    secondaryNameJa: "痕跡記録時間",
    secondaryTime: [15],
  },
  {
    nameJa: "狂眼",
    nameEn: "Mad Eyes",
    primaryNameJa: "オーバークロック",
    primaryTime: [30],
  },
  {
    nameJa: "黄衣の王",
    nameEn: "The Feaster",
    primaryNameJa: "悪夢凝視",
    primaryTime: [20, 5],
  },
  {
    nameJa: "夢の魔女",
    nameEn: "Dream Witch",
    primaryNameJa: "寄生",
    primaryTime: [75], // オリジナル信者（寄生信者は含まない）で殴るたびにクールタイムが40%短くなる（例えば残り60秒のときに殴れば残りが60×0.6=36秒になる。）
    secondaryNameJa: "同化",
    secondaryTime: [45], // 上に同じ
  },
  {
    nameJa: "泣き虫",
    nameEn: "Axe Boy",
    primaryNameJa: "怨霊消滅",
    primaryTime: [15],
    secondaryNameJa: "怨霊の巡回",
    secondaryTime: [30],
    tertiaryNameJa: "安息の道",
    tertiaryTime: [18],
  },
  {
    nameJa: "魔トカゲ",
    nameEn: "Evil Reptilian",
    primaryNameJa: "ハンタージャンプ",
    primaryTime: [11],
  },
  {
    nameJa: "血の女王",
    nameEn: "Bloody Queen",
    primaryNameJa: "鏡影",
    primaryTime: [13, 15],
  },
  {
    nameJa: "ガードNo.26",
    nameEn: "Guard 26",
    primaryNameJa: "リモコン爆弾",
    primaryTime: [40, 35],
  },
  {
    nameJa: "｢使徒｣",
    nameEn: '"Disciple"',
    primaryNameJa: "急襲",
    primaryTime: [10],
    secondaryNameJa: "ランウェイ",
    secondaryTime: [16],
  },
  {
    nameJa: "ヴァイオリニスト",
    nameEn: "Violinist",
    primaryNameJa: "奏鳴曲",
    primaryTime: [13],
    secondaryNameJa: "狂想曲",
    secondaryTime: [9, 14],
  },
  {
    nameJa: "彫刻師",
    nameEn: "Sculptor",
    primaryNameJa: "象形墓場",
    primaryTime: [12, 15],
  },
  {
    nameJa: "｢アンデッド｣",
    nameEn: '"Undead"',
    primaryNameJa: "溜め重叩き",
    primaryTime: [14],
    secondaryNameJa: "エネルギー変換",
    secondaryTime: [35],
  },
  {
    nameJa: "破輪",
    nameEn: "The Breaking Wheel",
    primaryNameJa: "悲観",
    primaryTime: [32],
    secondaryNameJa: "突刺の輪",
    secondaryTime: [6, 14],
    tertiaryNameJa: "道化",
    tertiaryTime: [30],
  },
  {
    nameJa: "漁師",
    nameEn: "Naiad",
    primaryNameJa: "漁狩",
    primaryTime: [19, 9],
    secondaryNameJa: "驚波",
    secondaryTime: [18],
  },
  {
    nameJa: "蝋人形師",
    nameEn: "Wax Artist",
    primaryNameJa: "蝋付着による操作不能時間",
    primaryTime: [15],
    secondaryNameJa: "硬化",
    secondaryTime: [18],
    tertiaryNameJa: "熔蝋",
    tertiaryTime: [25, 25],
  },
  {
    nameJa: "｢悪夢｣",
    nameEn: '"Nightmare"',
    primaryNameJa: "渡鴉",
    primaryTime: [20],
    secondaryNameJa: "凶兆",
    secondaryTime: [50],
  },
  {
    nameJa: "書記官",
    nameEn: "Clerk",
    primaryNameJa: "審査",
    primaryTime: [6, 6],
    secondaryNameJa: "記録・無効",
    secondaryTime: [10, 9],
  },
  {
    nameJa: "隠者",
    nameEn: "Hermit",
    primaryNameJa: "奇跡",
    primaryTime: [12],
    secondaryNameJa: "感知",
    secondaryTime: [60],
    tertiaryNameJa: "寄託",
    tertiaryTime: [40],
  },
  {
    nameJa: "夜の番人",
    nameEn: "Night Watch",
    primaryNameJa: "風域",
    primaryTime: [13],
    secondaryNameJa: "風行",
    secondaryTime: [5],
  },
];
