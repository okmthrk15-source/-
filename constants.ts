import { Prefecture } from './types';

export const REGION_COLORS = {
  Hokkaido: 'bg-green-600 hover:bg-green-500',
  Tohoku: 'bg-blue-600 hover:bg-blue-500',
  Kanto: 'bg-sky-500 hover:bg-sky-400',
  Chubu: 'bg-lime-600 hover:bg-lime-500',
  Kansai: 'bg-purple-600 hover:bg-purple-500',
  Chugoku: 'bg-orange-500 hover:bg-orange-400',
  Shikoku: 'bg-yellow-500 hover:bg-yellow-400',
  KyushuOkinawa: 'bg-rose-600 hover:bg-rose-500',
};

// Grid is now 16 columns wide, 28 rows tall to accommodate the new precise layout.
export const JAPAN_PREFECTURES: Prefecture[] = [
  // Hokkaido & Tohoku
  { id: 'hokkaido', name: '北海道', region: 'Hokkaido', color: REGION_COLORS.Hokkaido, gridRow: '1 / 6', gridColumn: '10 / 15' },
  { id: 'aomori', name: '青森', region: 'Tohoku', color: REGION_COLORS.Tohoku, gridRow: '6 / 8', gridColumn: '12 / 14' },
  { id: 'iwate', name: '岩手', region: 'Tohoku', color: REGION_COLORS.Tohoku, gridRow: '8 / 10', gridColumn: '13 / 14' },
  { id: 'akita', name: '秋田', region: 'Tohoku', color: REGION_COLORS.Tohoku, gridRow: '8 / 10', gridColumn: '12 / 13' },
  { id: 'miyagi', name: '宮城', region: 'Tohoku', color: REGION_COLORS.Tohoku, gridRow: '10 / 12', gridColumn: '13 / 14' },
  { id: 'yamagata', name: '山形', region: 'Tohoku', color: REGION_COLORS.Tohoku, gridRow: '10 / 12', gridColumn: '12 / 13' },
  { id: 'fukushima', name: '福島', region: 'Tohoku', color: REGION_COLORS.Tohoku, gridRow: '12 / 14', gridColumn: '12 / 14' },

  // Kanto & Chubu (Rebuilt based on blueprint)
  // Kanto Block (2x3)
  { id: 'ibaraki', name: '茨城', region: 'Kanto', color: REGION_COLORS.Kanto, gridRow: '14 / 16', gridColumn: '13 / 14' },
  { id: 'tochigi', name: '栃木', region: 'Kanto', color: REGION_COLORS.Kanto, gridRow: '14 / 16', gridColumn: '12 / 13' },
  { id: 'chiba', name: '千葉', region: 'Kanto', color: REGION_COLORS.Kanto, gridRow: '16 / 18', gridColumn: '13 / 14' },
  { id: 'saitama', name: '埼玉', region: 'Kanto', color: REGION_COLORS.Kanto, gridRow: '16 / 18', gridColumn: '12 / 13' },
  { id: 'kanagawa', name: '神奈川', region: 'Kanto', color: REGION_COLORS.Kanto, gridRow: '18 / 20', gridColumn: '13 / 14' },
  { id: 'tokyo', name: '東京都', region: 'Kanto', color: REGION_COLORS.Kanto, gridRow: '18 / 20', gridColumn: '12 / 13' },
  
  // Chubu (adjacent to Kanto)
  { id: 'nagano', name: '長野', region: 'Chubu', color: REGION_COLORS.Chubu, gridRow: '14 / 18', gridColumn: '11 / 12' }, // Tall block
  { id: 'niigata', name: '新潟', region: 'Chubu', color: REGION_COLORS.Chubu, gridRow: '12 / 14', gridColumn: '11 / 12' },
  { id: 'shizuoka', name: '静岡', region: 'Chubu', color: REGION_COLORS.Chubu, gridRow: '18 / 20', gridColumn: '10 / 12' }, // Horizontal block
  { id: 'aichi', name: '愛知', region: 'Chubu', color: REGION_COLORS.Chubu, gridRow: '18 / 20', gridColumn: '9 / 10' },
  { id: 'gifu', name: '岐阜', region: 'Chubu', color: REGION_COLORS.Chubu, gridRow: '16 / 18', gridColumn: '9 / 11' },
  { id: 'toyama', name: '富山', region: 'Chubu', color: REGION_COLORS.Chubu, gridRow: '14 / 16', gridColumn: '10 / 11' },
  { id: 'ishikawa', name: '石川', region: 'Chubu', color: REGION_COLORS.Chubu, gridRow: '14 / 16', gridColumn: '9 / 10' },
  { id: 'fukui', name: '福井', region: 'Chubu', color: REGION_COLORS.Chubu, gridRow: '16 / 18', gridColumn: '8 / 9' },

  // Kansai
  { id: 'shiga', name: '滋賀', region: 'Kansai', color: REGION_COLORS.Kansai, gridRow: '18 / 20', gridColumn: '8 / 9' },
  { id: 'mie', name: '三重', region: 'Kansai', color: REGION_COLORS.Kansai, gridRow: '20 / 22', gridColumn: '8 / 9' },
  { id: 'kyoto', name: '京都', region: 'Kansai', color: REGION_COLORS.Kansai, gridRow: '16 / 18', gridColumn: '7 / 8' },
  { id: 'osaka', name: '大阪', region: 'Kansai', color: REGION_COLORS.Kansai, gridRow: '18 / 20', gridColumn: '7 / 8' },
  { id: 'nara', name: '奈良', region: 'Kansai', color: REGION_COLORS.Kansai, gridRow: '20 / 22', gridColumn: '7 / 8' },
  { id: 'wakayama', name: '和歌山', region: 'Kansai', color: REGION_COLORS.Kansai, gridRow: '22 / 24', gridColumn: '7 / 8' },
  { id: 'hyogo', name: '兵庫', region: 'Kansai', color: REGION_COLORS.Kansai, gridRow: '16 / 19', gridColumn: '6 / 7' },

  // Chugoku & Shikoku
  { id: 'tottori', name: '鳥取', region: 'Chugoku', color: REGION_COLORS.Chugoku, gridRow: '16 / 18', gridColumn: '5 / 6' },
  { id: 'okayama', name: '岡山', region: 'Chugoku', color: REGION_COLORS.Chugoku, gridRow: '18 / 20', gridColumn: '5 / 6' },
  { id: 'kagawa', name: '香川', region: 'Shikoku', color: REGION_COLORS.Shikoku, gridRow: '20 / 22', gridColumn: '5 / 6' },
  { id: 'tokushima', name: '徳島', region: 'Shikoku', color: REGION_COLORS.Shikoku, gridRow: '22 / 24', gridColumn: '5 / 6' },
  { id: 'shimane', name: '島根', region: 'Chugoku', color: REGION_COLORS.Chugoku, gridRow: '16 / 18', gridColumn: '4 / 5' },
  { id: 'hiroshima', name: '広島', region: 'Chugoku', color: REGION_COLORS.Chugoku, gridRow: '18 / 20', gridColumn: '4 / 5' },
  { id: 'ehime', name: '愛媛', region: 'Shikoku', color: REGION_COLORS.Shikoku, gridRow: '20 / 22', gridColumn: '4 / 5' },
  { id: 'kochi', name: '高知', region: 'Shikoku', color: REGION_COLORS.Shikoku, gridRow: '22 / 24', gridColumn: '4 / 5' },
  { id: 'yamaguchi', name: '山口', region: 'Chugoku', color: REGION_COLORS.Chugoku, gridRow: '17 / 21', gridColumn: '3 / 4' },

  // Kyushu & Okinawa (with blank column at col 2)
  { id: 'fukuoka', name: '福岡', region: 'KyushuOkinawa', color: REGION_COLORS.KyushuOkinawa, gridRow: '18 / 20', gridColumn: '1 / 2' },
  { id: 'oita', name: '大分', region: 'KyushuOkinawa', color: REGION_COLORS.KyushuOkinawa, gridRow: '20 / 22', gridColumn: '1 / 2' },
  { id: 'miyazaki', name: '宮崎', region: 'KyushuOkinawa', color: REGION_COLORS.KyushuOkinawa, gridRow: '22 / 24', gridColumn: '1 / 2' },
  { id: 'saga', name: '佐賀', region: 'KyushuOkinawa', color: REGION_COLORS.KyushuOkinawa, gridRow: '18 / 20', gridColumn: '0 / 1' },
  { id: 'nagasaki', name: '長崎', region: 'KyushuOkinawa', color: REGION_COLORS.KyushuOkinawa, gridRow: '20 / 22', gridColumn: '0 / 1' },
  { id: 'okinawa', name: '沖縄', region: 'KyushuOkinawa', color: REGION_COLORS.KyushuOkinawa, gridRow: '22 / 24', gridColumn: '0 / 1' },
  { id: 'kumamoto', name: '熊本', region: 'KyushuOkinawa', color: REGION_COLORS.KyushuOkinawa, gridRow: '18 / 20', gridColumn: '2 / 3' },
  { id: 'kagoshima', name: '鹿児島', region: 'KyushuOkinawa', color: REGION_COLORS.KyushuOkinawa, gridRow: '20 / 24', gridColumn: '2 / 3' }, // 2x height
];
