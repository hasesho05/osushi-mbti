export type Testimonial = {
  title: string;
  type: string;
  image: string;
  testimonial: string;
};

export const testimonials: Testimonial[] = [
  {
    title: 'アナゴ',
    type: 'ENFJ',
    image: '/sushi/ENFJ.png',
    testimonial: `
  正確さに驚いています！まだ読み切っていませんが、すでに多くの気づきがありました！
  `,
  },
  {
    title: 'エビ',
    type: 'ENFP',
    image: '/sushi/ENFP.png',
    testimonial: `
    自分の性格タイプについての説明を読むのがとても楽しかった。無料でアクセスできて助かります。
  `,
  },
  {
    title: 'ウニ',
    type: 'ENTJ',
    image: '/sushi/ENTJ.png',
    testimonial: `
    信じられないほど正確でした。否が応でも本当の自分を見るようなもので、大変驚きました。
  `,
  },

  {
    title: 'ハマチ',
    type: 'INFJ',
    image: '/sushi/INFJ.png',
    testimonial: `
    自分の性格タイプについて、これほど徹底的な洞察が得られたことは素晴らしい。本当に考える材料となり、今後の意思決定の基礎となった。
  `,
  },
  {
    title: 'トロ',
    type: 'ISFJ',
    image: '/sushi/ISFJ.png',
    testimonial:
      'とても細かい部分まで説明してくれるので、自分自身の理解が深まりました。',
  },
  {
    title: 'マグロ',
    type: 'ISTJ',
    image: '/sushi/ISTJ.png',
    testimonial:
      '自分のことがより詳細に理解できるようになりました。自己理解の手助けをしてくれて、本当にありがとうございます。',
  },
  {
    title: 'サーモン',
    type: 'ESFJ',
    image: '/sushi/ESFJ.png',
    testimonial:
      'これまで見逃していた自分の特性を理解できた。とても役立つ情報でした。',
  },
  {
    title: 'アワビ',
    type: 'ESTJ',
    image: '/sushi/ESTJ.png',
    testimonial:
      '自分の性格について深く理解することができ、生活に役立てています。',
  },
  {
    title: 'ホタテ',
    type: 'ESFP',
    image: '/sushi/ESFP.png',
    testimonial: '私の強みと弱点を理解するのに大いに役立ちました。',
  },
  {
    title: 'カニ',
    type: 'ESTP',
    image: '/sushi/ESTP.png',
    testimonial: '非常に鋭い洞察力があり、自己認識の向上に役立ちました。',
  },
  {
    title: 'イクラ',
    type: 'ISFP',
    image: '/sushi/ISFP.png',
    testimonial: '自分自身を理解するための非常に貴重なツールです。',
  },
  {
    title: 'サバ',
    type: 'ISTP',
    image: '/sushi/ISTP.png',
    testimonial: 'この情報がなければ、自分自身を誤解してしまうところでした。',
  },
];
