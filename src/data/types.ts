export type PersonalityType = {
  title: string;
  type: string;
  remark: string;
  image: string;
  description: string;
  compatibleType: CompatibleType[];
};

export type CompatibleType = {
  title: string;
  type: string;
  image: string;
  combination: string;
  remark: string;
  description: string;
};

export const PERSONALITY_TYPES: PersonalityType[] = [
  {
    title: 'ISTJ',
    type: 'マグロ',
    remark: '忠実な実践者',
    image: '/sushi/ISTJ.png',
    description: `マグロ型(ISTJ)の人々は、静かで真面目で、責任感が強く、実用的なアプローチを持っています。<br />
    彼らはしっかりとした伝統とルールを尊重し、規則に基づいて物事を行うことを好みます。事実に基づいた決定を行い、計画と組織を重視します。<br />
  
    マグロ型の人々は努力家で、物事が正しい方法で行われていることを確認するために自分自身をプッシュします。<br />
    彼らは誠実であり、自分の約束を守ることに尽力します。これは彼らが非常に信頼性が高いと見なされる理由の一つです。<br />
  
    しかし、その一方で、マグロ型の人々は他人の感情や視点を無視する傾向があります。<br />
    彼らはしばしば情報を文字通りに受け取るため、抽象的な概念や新しいアイデアを理解するのが難しいことがあります。`,
    compatibleType: [
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: '信頼性のデュオ',
        remark: '安定性と規律を追求',
        description:
          'サーモン型とマグロ型の組み合わせは、共に高い信頼性と規律を持つため、非常に安定した関係を築くことができます。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '現実的なペア',
        remark: '現実と誠実さを共有',
        description:
          '現実的で実用的なイクラ型と誠実なマグロ型は、お互いの現実感と誠実さを理解し、尊重することができます。',
      },
      {
        title: 'ENTJ',
        type: 'ウニ',
        image: '/sushi/ENTJ.png',
        combination: '指導と実行のバランス',
        remark: '理論と行動を一緒に',
        description:
          'リーダーシップを持つウニ型と行動的なマグロ型は、理論と行動を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'INFP',
        type: 'タコ',
        image: '/sushi/INFP.png',
        combination: '想像力と現実感のペア',
        remark: '夢と現実を共有',
        description:
          '想像力豊かなタコ型と現実的なマグロ型は、お互いに夢と現実を理解し、共有することができる関係性です。',
      },
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '理解と努力の連携',
        remark: '理論と具体性を組み合わせて',
        description:
          '感情に対する深い理解を持つアナゴ型と誠実で努力家のマグロ型は、相手の感情を理解し、具体的なアクションに変換することができる組み合わせです。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: '具体的な行動のペア',
        remark: '現実と詳細を共有',
        description:
          '詳細に対する敏感さを持つサバ型と現実的なマグロ型は、具体的な行動と現実の詳細において共通点を持つことができます。',
      },
      {
        title: 'ESTP',
        type: 'カニ',
        image: '/sushi/ESTP.png',
        combination: '動的で現実的なペア',
        remark: '行動と規律を一緒に',
        description:
          '行動的なカニ型と規律正しいマグロ型は、お互いの行動と規律を理解し、尊重することができます。',
      },
      {
        title: 'INFJ',
        type: 'ハマチ',
        image: '/sushi/INFJ.png',
        combination: '理論と具体性のバランス',
        remark: 'ビジョンと行動を共有',
        description:
          'ビジョナリーなハマチ型と行動的なマグロ型は、ビジョンと具体的な行動を組み合わせた関係性を築くことができます。',
      },
    ],
  },
  {
    title: 'ISFJ',
    type: 'トロ',
    remark: '忠実な保護者',
    image: '/sushi/ISFJ.png',
    description: `トロ型(ISFJ)の人々は、穏やかで親切、そして忠実で、強い責任感を持ちます。<br />
    彼らは静かな存在感を持ちつつ、他人のために何が必要であるかを理解し、それを提供しようと努力します。<br />
    トロ型の人々は、周囲の人々の感情を敏感に察知し、その人々が必要とするものを提供することで自己を表現します。<br />
  
    トロ型の人々はルーチンと秩序を好み、細部にまで注意を払い、コミュニティや家族の調和を保つことに尽力します。<br />
    彼らは物事が適切に、そして時間通りに行われることを重視します。これは彼らの行動や決定をガイドする内向的感覚によるものです。<br />
  
    しかし、その一方で、トロ型の人々はしばしば自分の感情を抑え込む傾向があります。<br />
    彼らは他人を気遣うあまり、自分自身のニーズや感情を無視することがあります。`,
    compatibleType: [
      {
        title: 'ESFP',
        type: 'ホタテ',
        image: '/sushi/ESFP.png',
        combination: '共感のペア',
        remark: '感情的なコミュニケーションを共有',
        description:
          '感情的に開放的なホタテ型と感情に敏感なトロ型は、感情的なコミュニケーションを通じて深い関係を築くことができます。',
      },
      {
        title: 'INFP',
        type: 'タコ',
        image: '/sushi/INFP.png',
        combination: '理解と共感のペア',
        remark: '深い理解と共感を持つ',
        description:
          '理解力と共感力を持つタコ型と感情的なトロ型は、感情の深さを共有する深い関係性を築くことができます。',
      },
      {
        title: 'ESTJ',
        type: 'アワビ',
        image: '/sushi/ESTJ.png',
        combination: '実行とサポートのバランス',
        remark: '安定性と信頼性を一緒に',
        description:
          '行動的なアワビ型とサポート的なトロ型は、安定性と信頼性を重視したバランスの良い関係を築くことができます。',
      },
      {
        title: 'ENTP',
        type: 'アジ',
        image: '/sushi/ENTP.png',
        combination: '想像力と現実感のペア',
        remark: '新しいアイデアと実用性を共有',
        description:
          '新しいアイデアを持つアジ型と実用的なトロ型は、新しいアイデアとその実用性を理解し、共有することができます。',
      },
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: '感情と想像力の共有',
        remark: '開放性と理解を一緒に',
        description:
          '開放的なエビ型と理解力のあるトロ型は、感情と想像力の共有を通じて深い関係を築くことができます。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '共感と理解のペア',
        remark: '静寂と敏感さを一緒に',
        description:
          '静寂なイクラ型と敏感なトロ型は、共感と理解の共有を通じて、静かで深い関係を築くことができます。',
      },
    ],
  },

  {
    title: 'INFJ',
    type: 'ハマチ',
    remark: '優しい哲学者',
    image: '/sushi/INFJ.png',
    description: `ハマチ型(INFJ)の人々は、深い洞察力と豊かな想像力を持ち、しばしば周围の人々を理解しようとします。<br />
    彼らは心から他人の感情や動機を理解しようとする傾向があるため、他人からの信頼を獲得しやすいと言えるでしょう。基本的に、ハマチ型の人々は、静かな内省者でありながら、周囲の人々を助け、励ますことで充実感を感じます。<br />

    ハマチ型の人々は、ビジョンを持つことを大切にし、一貫性と目的意識をもって行動します。これは彼らの内向的直観が作用する結果であり、これが彼らにとっての原動力となります。<br />
    彼らの意識は常に未来に向かっていて、しばしば理想的な結果を追求します。これは他人から見て非現実的に見えるかもしれませんが、ハマチ型の人々にとっては夢を実現するために必要なことだったりします。<br /><br />
    
    ハマチ型の人々は非常に繊細で、自分や他人の感情に敏感です。そのため、痛みや苦しみを経験すると、それが自分自身の問題であるかのように感じることがあります。また、自分自身や他人の誤解や不正に対して深く傷つく傾向があります。<br />
    
    一方で、ハマチ型の人々はしばしば他人を理解しすぎてしまい、自分自身を見失うことがあります。また、理想的な世界観を持つ彼らは、現実がそれに対して常に達していないことに失望感を感じることがあります。<br />
    これにより、彼らは感情的なストレスや孤独感を経験することが多く、内面的な葛藤に苦しむことがあります。<br />
    また、人々に理想を強く押し付ける傾向があるため、他人から反感を買うこともあります。`,
    compatibleType: [
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '理想主義者デュオ',
        remark: '親密さと理想を追求',
        description:
          '理想主義者であるアナゴとハマチは、深い親密さと理想を追求する関係性を築くことができます。',
      },
      {
        title: 'INFP',
        type: 'タコ',
        image: '/sushi/INFP.png',
        combination: '共感のカップル',
        remark: '理解と共感が強い',
        description:
          '理解力と共感力を持つタコとハマチは、感情の深さを共有できる深い関係性です。',
      },
      {
        title: 'INTJ',
        type: 'イカ',
        image: '/sushi/INTJ.png',
        combination: '思考と感情のバランス',
        remark: '理論と理想を一緒に',
        description:
          '深い思考を持つイカと感情的なハマチは、理論と理想を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '理解と親密感のペア',
        remark: '深い洞察と共感を持つ',
        description:
          '理解と親密感を追求するトロとハマチは、お互いに深い洞察力と共感力を持つ組み合わせです。',
      },
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: '活気と共感のペア',
        remark: '楽観性と理解を共有',
        description:
          '活気に満ちたエビとハマチは、楽観性と理解を共有する関係性です。',
      },
      {
        title: 'INFJ',
        type: 'ハマチ',
        image: '/sushi/INFJ.png',
        combination: '優しい哲学者',
        remark: '深い洞察と親密さを追求',
        description:
          '深い洞察力を持つハマチと親密さを追求する関係性を築くことができます。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: '冷静と思いやりのペア',
        remark: '効率性とサポートを共有',
        description:
          '冷静さと思いやりを持つサバとハマチは、効率性とサポートを共有する関係性を築くことができます。',
      },
      {
        title: 'ISTJ',
        type: 'マグロ',
        image: '/sushi/ISTJ.png',
        combination: '信頼と理解のバランス',
        remark: '忠実さと理性を共有',
        description:
          '信頼と理解を追求するマグロとハマチは、忠実さと理性を共有する関係性を築くことができます。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '感性と理解のデュオ',
        remark: '感受性と思いやりを持つ',
        description:
          '感受性を持つイクラとハマチは、感性と思いやりを共有する関係性を築くことができます。',
      },
    ],
  },
  {
    title: 'INTJ',
    type: 'イカ',
    remark: '自信あふれる戦略家',
    image: '/sushi/INTJ.png',
    description: `イカ型(INTJ)の人々は、独自の洞察力と知識を活用し、自分の目標に向かって前進する能力を持っています。<br />
    また、イカ型の人々は頭脳明晰で、筋道を立てて思考することを好みます。これにより、彼らは複雑な問題を解決したり、新しい方法を開発したりする能力を持っています。<br />
  
    イカ型の人々は、彼ら自身のビジョンを追求し、それを現実にするために必要なすべての手段を講じることを愛します。彼らは他人からの意見を尊重しますが、それが自分自身のビジョンや理論と一致しない場合は、自分自身の信念に従います。<br />
    
    一方で、イカ型の人々は自分自身の思考やアイデアに非常に自信を持っているため、他人の意見を無視したり、頑固であると見なされることがあります。また、彼らは自分自身の視点や理論を強く主張する傾向があり、これが他人との衝突を引き起こすこともあります。<br /><br />
    
    しかし、イカ型の人々はその思考の深さと論理性により、彼らが目指す目標やビジョンに向かって確固とした道筋を作り上げることができます。彼らはしばしば非常に効率的で、適切な計画と戦略を立てて、目標を達成します。`,
    compatibleType: [
      {
        title: 'ENTJ',
        type: 'ウニ',
        image: '/sushi/ENTJ.png',
        combination: '戦略的デュオ',
        remark: '効率と計画を重視',
        description:
          '戦略的で効率的なウニとイカは、計画性と効率性を重視する強力な組み合わせです。',
      },
      {
        title: 'INTP',
        type: 'タマゴ',
        image: '/sushi/INTP.png',
        combination: '知識探求ペア',
        remark: '新たな理論とアイデアを共有',
        description:
          '新たな理論とアイデアを共有できるタマゴとイカは、知識探求を重視する関係性です。',
      },
      {
        title: 'INFJ',
        type: 'ハマチ',
        image: '/sushi/INFJ.png',
        combination: '思考と感情のバランス',
        remark: '理論と理想を一緒に',
        description:
          '深い思考を持つイカと感情的なハマチは、理論と理想を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISTJ',
        type: 'マグロ',
        image: '/sushi/ISTJ.png',
        combination: '実行戦略ペア',
        remark: '現実とビジョンをバランスよく',
        description: '実行力を持つイカがマグロのビジョンを具現化します。',
      },
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: '創造的な組み合わせ',
        remark: '自由思考と戦略的思考のバランス',
        description:
          '自由に発想を展開するエビと戦略的に思考するイカは、創造性と戦略性を組み合わせることができます。',
      },
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: '感情と論理のコラボレーション',
        remark: '感情的配慮と理論的な視点の組み合わせ',
        description:
          '感情的に配慮深いサーモンと理論的な視点を持つイカは、バランスの取れた人間関係を築くことができます。',
      },
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '理想的なパートナーシップ',
        remark: 'ビジョンと共感力を結びつける',
        description:
          '理想を追求するアナゴと洞察力豊かなイカは、共感力とビジョンを結びつけることができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '互補的な関係',
        remark: '組織力と洞察力のマッチ',
        description:
          '詳細を重視するトロと全体像を見るイカは、互いに補い合う関係を作り出します。',
      },
    ],
  },
  {
    title: 'ISTP',
    type: 'サバ',
    remark: '冷静な解析者',
    image: '/sushi/ISTP.png',
    description: `サバ型(ISTP)の人々は、状況を具体的に解析し、問題を解決する能力に優れています。<br />
    彼らは観察者としての役割を良く果たし、情報を収集し、理論を構築し、その場で論理的な解決策を見つける能力を持っています。<br />
  
    サバ型の人々は、自分自身の視点から物事を客観的に見ることができます。これは彼らが複雑な問題を解析し、理論を構築するための重要なスキルです。<br />
    彼らはしばしば静かで無口ですが、これは彼らが内部的な思考プロセスに没頭しているためです。<br />
  
    一方で、サバ型の人々は、自分自身の感情についてはあまり語らない傾向があります。これは彼らが内面的な思考に重きを置き、外部的な表現を控える性格から来ています。<br />
    
    しかし、サバ型の人々は自分自身の思考と感情を理解し、他人と共有することで、より深い人間関係を築くことができます。<br /><br />
    
    サバ型の人々はまた、物事がどのように機能するか、なぜそのように機能するのかを理解することに深い興味を持っています。これは彼らが理論的な問題を解決する際の強みとなります。`,
    compatibleType: [
      {
        title: 'ESTP',
        type: 'カニ',
        image: '/sushi/ESTP.png',
        combination: '実践的なデュオ',
        remark: '行動と分析をバランスよく',
        description:
          '実践的で行動的なカニと分析的なサバは、行動と分析のバランスが取れた組み合わせです。',
      },
      {
        title: 'ISTJ',
        type: 'マグロ',
        image: '/sushi/ISTJ.png',
        combination: '論理的なペア',
        remark: '問題解決に集中',
        description:
          '共に論理的思考を好むマグロとサバは、問題解決に重きを置く関係性です。',
      },
      {
        title: 'INTP',
        type: 'タマゴ',
        image: '/sushi/INTP.png',
        combination: '理論的なデュオ',
        remark: '新たな理論とアイデアを共有',
        description:
          '新たな理論とアイデアを共有できるタマゴとサバは、知識探求を重視する関係性です。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '感覚と思考のバランス',
        remark: '現実と理論を一緒に',
        description:
          '感覚的で現実的なイクラと思考的なサバは、現実と理論を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: 'エネルギッシュなペア',
        remark: '感情と行動をバランスよく',
        description:
          'エネルギッシュなエビと冷静なサバは、感情と行動をバランス良く組み合わせることができます。',
      },
      {
        title: 'ENTP',
        type: 'アジ',
        image: '/sushi/ENTP.png',
        combination: 'アイデア探求デュオ',
        remark: '挑戦と解析を一緒に',
        description:
          'アイデアに満ち溢れたアジと解析的なサバは、新しい挑戦とその分析を共有できます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '安定と解析のペア',
        remark: '安定と理論を一緒に',
        description:
          '安定を重視するトロと解析的なサバは、安定と理論を融合させた関係性です。',
      },
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: '観察と協力のデュオ',
        remark: '外向性と内向性をバランスよく',
        description:
          '協力的なサーモンと観察的なサバは、外向性と内向性をバランス良く組み合わせることができます。',
      },
    ],
  },
  {
    title: 'ISFP',
    type: 'イクラ',
    remark: '直感的な芸術家',
    image: '/sushi/ISFP.png',
    description: `イクラ型(ISFP)の人々は、感情豊かで繊細な芸術家であり、しばしば独自の美的視点を持っています。<br />
    彼らは直感的に物事を理解し、独自の価値観を持ち、個々の経験や感情に深く影響を受けます。<br />
  
    イクラ型の人々は、自分自身の感情に非常に敏感であり、しばしば感情的な経験を通じて人生を理解します。<br />
    彼らはまた、他人の感情や視点を理解し、共感する能力にも優れています。これは他人からの信頼を得るのに役立ちます。<br />
  
    一方で、イクラ型の人々はしばしば自分自身の感情に深く影響を受け、その結果、過度に感情的になることがあります。<br />
    彼らはまた、自分自身の内面的な経験を理解し、表現するのに苦労することがあります。<br />
    
    しかし、自分自身の感情や価値観を理解し、他人と共有することで、より深い人間関係を築くことができます。<br /><br />
    
    イクラ型の人々はまた、美しいものや感動的な経験に深い感謝の念を持っています。これは彼らが芸術的な表現や創造性を重視する理由の一つです。`,
    compatibleType: [
      {
        title: 'ESFP',
        type: 'ホタテ',
        image: '/sushi/ESFP.png',
        combination: '感情的なデュオ',
        remark: '感情と共感を共有',
        description:
          '感情的で共感力のあるホタテとイクラは、感情と共感を共有する関係性を築くことができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '深い共感のペア',
        remark: '理解と感情の共有',
        description:
          '理解力と感情の深さを持つトロとイクラは、感情的な深さを共有できる関係性です。',
      },
      {
        title: 'INTP',
        type: 'タマゴ',
        image: '/sushi/INTP.png',
        combination: '感情と思考のバランス',
        remark: '現実と理論を一緒に',
        description:
          '深い思考を持つタマゴと感情的なイクラは、現実と理論を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: '感覚と思考のバランス',
        remark: '現実と分析を一緒に',
        description:
          '分析的で現実的なサバと感情的なイクラは、現実と分析を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'INFP',
        type: 'タコ',
        image: '/sushi/INFP.png',
        combination: '内向的なデュオ',
        remark: '内省と感情の共有',
        description:
          '内省的なタコと感情的なイクラは、内省と感情を共有できる緊密な関係を築くことができます。',
      },
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '感情的なリーダーとの連携',
        remark: '共感と指導を一緒に',
        description:
          'リーダーシップを持つアナゴと共感的なイクラは、共感と指導を組み合わせた関係を築くことができます。',
      },
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: '社交的なデュオ',
        remark: '感情の交換と協調',
        description:
          '社交的なサーモンと感情的なイクラは、感情の交換と協調性を重視する関係性を築くことができます。',
      },
      {
        title: 'ESTJ',
        type: 'アワビ',
        image: '/sushi/ESTJ.png',
        combination: '現実的なペア',
        remark: '現実と感情をバランスよく',
        description:
          '実践的で行動的なアワビと感情的なイクラは、現実と感情のバランスが取れた関係性を築くことができます。',
      },
    ],
  },
  {
    title: 'INFP',
    type: 'タコ',
    remark: '理想主義の夢想家',
    image: '/sushi/INFP.png',
    description: `タコ型(INFP)の人々は、理想主義者であり夢想家であり、しばしば自分の内面的な世界で深い洞察力と創造性を発揮します。<br />
    彼らは自分の感情と価値観に非常に敏感であり、個々の経験や感情がどのように自分自身や他人に影響を与えるかを理解するのに長けています。<br />
  
    タコ型の人々は、他人の感情や視点を理解し、共感する能力に優れています。これは他人からの信頼を得るのに役立ちます。<br />
    また、彼らは自分自身の理想と価値観を強く持ち、しばしば人々が生きる世界をより良くしようと努力します。<br />
  
    一方で、タコ型の人々はしばしば自分自身の感情に深く影響を受け、その結果、過度に感情的になることがあります。<br />
    彼らはまた、自分自身の内面的な経験を理解し、表現するのに苦労することがあります。<br />
    
    しかし、自分自身の感情や価値観を理解し、他人と共有することで、より深い人間関係を築くことができます。<br /><br />
    
    タコ型の人々はまた、美しいものや感動的な経験に深い感謝の念を持っています。これは彼らが芸術的な表現や創造性を重視する理由の一つです。`,
    compatibleType: [
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: '理想主義のデュオ',
        remark: '感情と理想を共有',
        description:
          '理想主義で感情豊かなエビとタコは、感情と理想を共有する関係性を築くことができます。',
      },
      {
        title: 'INFJ',
        type: 'ハマチ',
        image: '/sushi/INFJ.png',
        combination: '深い共感のペア',
        remark: '理解と感情の共有',
        description:
          '理解力と感情の深さを持つハマチとタコは、感情的な深さを共有できる関係性です。',
      },
      {
        title: 'INTP',
        type: 'タマゴ',
        image: '/sushi/INTP.png',
        combination: '感情と思考のバランス',
        remark: '現実と理論を一緒に',
        description:
          '深い思考を持つタマゴと感情的なタコは、現実と理論を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '感覚と感情のバランス',
        remark: '直感と感情を一緒に',
        description:
          '直感的で感情的なイクラと感情的なタコは、直感と感情を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '理想と共感のデュオ',
        remark: '理想と共感を一緒に',
        description:
          '理想主義で共感力のあるアナゴとタコは、理想と共感を組み合わせた良い関係性を築くことができます。',
      },
      {
        title: 'INFP',
        type: 'タコ',
        image: '/sushi/INFP.png',
        combination: '理想主義のペア',
        remark: '理想と理解の共有',
        description:
          '理想主義者であるタコ同士は、理想と理解を共有できる深い関係性を築くことができます。',
      },
      {
        title: 'INTJ',
        type: 'イカ',
        image: '/sushi/INTJ.png',
        combination: '感情と戦略のバランス',
        remark: '感情と計画を一緒に',
        description:
          '戦略的なイカと感情的なタコは、感情と計画を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '感情と現実のバランス',
        remark: '感情と現実を一緒に',
        description:
          '現実的なトロと感情的なタコは、感情と現実を組み合わせたバランスの良い関係性を築くことができます。',
      },
    ],
  },
  {
    title: 'INTP',
    type: 'タマゴ',
    remark: '論理的な思考家',
    image: '/sushi/INTP.png',
    description: `タマゴ型(INTP)の人々は、論理的な思考と創造的な洞察に優れています。<br />
    彼らは新しいアイデアや可能性を探求し、概念や理論を深く理解するのを楽しみます。<br />
  
    タマゴ型の人々は自己啓発と自己改善を重視し、独立した思考と自由を高く評価します。<br />
    彼らは自分自身の内面的な世界に深く集中し、深い理解と洞察を得るために時間を費やします。<br />
  
    一方で、タマゴ型の人々はしばしば自分自身の感情に気づきにくいかもしれません。<br />
    彼らは感情よりも理論や論理を優先するため、自分自身や他人の感情を理解するのに苦労することがあります。<br />
  
    しかし、自分自身の感情や他人の感情を理解し、表現する能力を開発することで、より深い人間関係を築くことができます。<br /><br />
  
    タマゴ型の人々はまた、自分自身の理論やアイデアに深い自信を持っています。<br />
    これは彼らが自分自身の理論やアイデアを追求するための原動力となります。`,
    compatibleType: [
      {
        title: 'ENTP',
        type: 'アジ',
        image: '/sushi/ENTP.png',
        combination: '創造的なデュオ',
        remark: 'アイデアと可能性を共有',
        description:
          '創造的な思考を持つアジと論理的なタマゴは、新しいアイデアと可能性を共有する関係性を築くことができます。',
      },
      {
        title: 'INTJ',
        type: 'イカ',
        image: '/sushi/INTJ.png',
        combination: '深い思考のペア',
        remark: '理論と論理の共有',
        description:
          '深い思考力を持つイカと論理的なタマゴは、理論と論理を共有できる関係性です。',
      },
      {
        title: 'INFP',
        type: 'タコ',
        image: '/sushi/INFP.png',
        combination: '感情と思考のバランス',
        remark: '理論と感情を一緒に',
        description:
          '深い感情を持つタコと論理的なタマゴは、理論と感情を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: '論理と現実感覚のバランス',
        remark: '実践と理論を一緒に',
        description:
          '現実感覚を持つサバと論理的なタマゴは、実践と理論を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '洞察と感情の共有',
        remark: '理論と社会性を一緒に',
        description:
          '深い洞察力と社会性を持つアナゴと論理的なタマゴは、理論と社会性を組み合わせた有益な関係を築くことができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '思考と感情の調和',
        remark: '現実と理論を一緒に',
        description:
          '現実感覚と感情的なトロと論理的なタマゴは、現実と理論を組み合わせてお互いを補完する関係性を築くことができます。',
      },
      {
        title: 'ESTP',
        type: 'カニ',
        image: '/sushi/ESTP.png',
        combination: '行動と思考のバランス',
        remark: '行動と理論を一緒に',
        description:
          '活動的なカニと論理的なタマゴは、行動と理論を組み合わせたダイナミックな関係性を築くことができます。',
      },
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: '感情と思考の調和',
        remark: '社会性と理論を一緒に',
        description:
          '社会的で感情的なサーモンと論理的なタマゴは、社会性と理論を組み合わせた対話的な関係性を築くことができます。',
      },
    ],
  },
  {
    title: 'ESTP',
    type: 'カニ',
    remark: 'エネルギッシュな行動家',
    image: '/sushi/ESTP.png',
    description: `カニ型(ESTP)の人々は、エネルギッシュで実践的で、現実的な視点を持ちます。<br />
    彼らはここと今を生き、即座に状況を理解し、それに対応する能力に優れています。<br />
  
    カニ型の人々は自由と自立を重視し、制限や規則を嫌います。<br />
    また、彼らは自分自身の経験を通じて世界を理解し、新しい経験を追求するのを楽しみます。<br />
  
    カニ型の人々は社交的で、人々と一緒にいることを楽しんでいます。<br />
    彼らは自分自身を表現するのが得意で、他人を楽しませるのが大好きです。<br />
  
    一方、カニ型の人々は長期的な計画や抽象的な理論にはあまり興味がありません。<br />
    彼らは具体的な結果と実際の経験を重視し、それがすぐに得られない場合はフラストレーションを感じることがあります。<br /><br />
  
    カニ型の人々は、自分自身の意見を率直に表現し、他人に対しても同様に期待します。<br />
    これは彼らが誤解や混乱を避け、効率的なコミュニケーションを維持したいからです。`,
    compatibleType: [
      {
        title: 'ESTJ',
        type: 'アワビ',
        image: '/sushi/ESTJ.png',
        combination: 'エネルギッシュなデュオ',
        remark: '活発さと実践性を共有',
        description:
          '活発な思考を持つアワビとエネルギッシュなカニは、活発さと実践性を共有する関係性を築くことができます。',
      },
      {
        title: 'ESFP',
        type: 'ホタテ',
        image: '/sushi/ESFP.png',
        combination: '社交的なペア',
        remark: '楽しみとエネルギーを共有',
        description:
          '社交的なホタテとエネルギッシュなカニは、楽しみとエネルギーを共有する関係性です。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: '現実感覚と行動力のバランス',
        remark: '即座に行動と現実的な視点を一緒に',
        description:
          '現実感覚を持つサバとエネルギッシュなカニは、即座に行動する能力と現実的な視点を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '安定感とエネルギーのペア',
        remark: '実用性と親密さを持つ',
        description:
          '安定性を追求するトロとエネルギッシュなカニは、実用性と親密さを持つ組み合わせです。',
      },
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: '楽観的なデュオ',
        remark: 'エネルギーと創造性を共有',
        description:
          '楽観的なエビとエネルギッシュなカニは、エネルギーと創造性を共有する関係性を築くことができます。',
      },
      {
        title: 'ENTJ',
        type: 'ウニ',
        image: '/sushi/ENTJ.png',
        combination: '野心的なペア',
        remark: 'エネルギーと指導力を一緒に',
        description:
          '野心的なウニとエネルギッシュなカニは、エネルギーと指導力を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: '共感力とエネルギーのバランス',
        remark: '共感と行動力を一緒に',
        description:
          '共感力を持つサーモンとエネルギッシュなカニは、共感と行動力を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: 'カリスマ性とエネルギーのペア',
        remark: '影響力と活発さを持つ',
        description:
          'カリスマ性を追求するアナゴとエネルギッシュなカニは、影響力と活発さを持つ組み合わせです。',
      },
    ],
  },
  {
    title: 'ESFP',
    type: 'ホタテ',
    remark: '社交的なエンターテイナー',
    image: '/sushi/ESFP.png',
    description: `ホタテ型(ESFP)の人々は、社交的でエネルギッシュで、周囲に喜びをもたらすことを楽しむ性格です。<br />
    彼らはここと今を生き、即座に状況を理解し、それに対応する能力に優れています。<br />
  
    ホタテ型の人々は、自由を愛し、新しい経験を追求することを楽しみます。<br />
    また、彼らは感情的な繋がりを大切にし、人々と一緒にいることを楽しんでいます。<br />
  
    ホタテ型の人々は、実際的で具体的な解決策を追求し、理論的な議論や抽象的な考えよりも、具体的なアクションを重視します。<br />
  
    一方、ホタテ型の人々は、計画を立てることやルーチンを維持することに苦手意識を持つことがあります。<br />
    彼らは自由とスポンテニアスさを好むため、未来のことを考えるよりも現在の体験に集中することを好みます。<br /><br />
  
    ホタテ型の人々は、他人の感情に敏感で、人々が幸せでいることを深く気にかけます。<br />
    彼らは周囲の人々にポジティブなエネルギーを広め、人々を励まし、喜ばせるのが得意です。`,
    compatibleType: [
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: '社交的なデュオ',
        remark: '共感とエネルギーを共有',
        description:
          '共感力を持つサーモンとエネルギッシュなホタテは、共感とエネルギーを共有する関係性を築くことができます。',
      },
      {
        title: 'ESTP',
        type: 'カニ',
        image: '/sushi/ESTP.png',
        combination: 'エネルギッシュなペア',
        remark: '活力と活発さを共有',
        description:
          '活発なカニとエネルギッシュなホタテは、活力と活発さを共有する関係性です。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '感情とエネルギーのバランス',
        remark: '感情の深さと活気を一緒に',
        description:
          '感情的な深さを持つイクラとエネルギッシュなホタテは、感情の深さと活気を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: 'エネルギーと現実感覚のペア',
        remark: '即座に行動と現実的な視点を持つ',
        description:
          '現実感覚を持つサバとエネルギッシュなホタテは、即座に行動する能力と現実的な視点を持つ組み合わせです。',
      },
      {
        title: 'ENFJ',
        type: 'エビ',
        image: '/sushi/ENFJ.png',
        combination: 'インスピレーションのペア',
        remark: '感情の共有とエネルギー',
        description:
          '共感力を持つエビとエネルギッシュなホタテは、感情を共有し、一緒にエネルギーを広めることができます。',
      },
      {
        title: 'ENFP',
        type: 'タコ',
        image: '/sushi/ENFP.png',
        combination: '創造的なデュオ',
        remark: 'エネルギーと創造性の共有',
        description:
          '創造的なタコとエネルギッシュなホタテは、エネルギーと創造性を共有する関係性です。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '心地よさとエネルギーのバランス',
        remark: '安定感と活発さを一緒に',
        description:
          '安定を提供するトロとエネルギッシュなホタテは、安定感と活発さを一緒に提供することができる関係性を築くことができます。',
      },
      {
        title: 'INFP',
        type: 'ウニ',
        image: '/sushi/INFP.png',
        combination: '感情とエネルギーの共有',
        remark: '感情の深さと活発さを一緒に',
        description:
          '感情的な深さを持つウニとエネルギッシュなホタテは、深い感情と活発さを共有する組み合わせです。',
      },
    ],
  },
  {
    title: 'ENFP',
    type: 'エビ',
    remark: '情熱的なキャンペーンナー',
    image: '/sushi/ENFP.png',
    description: `エビ型(ENFP)の人々は自由な精神と強い好奇心を持っており、可能性と機会を追求します。<br />
    彼らは創造的で、想像力豊かで、新しいアイデアや新しい見方を楽しむ傾向があります。<br />
  
    エビ型の人々は、人々と接することを深く楽しむ社交的な性格で、他人とのつながりとコミュニケーションを大切にします。<br />
    また、他人の意見や視点を尊重し、相手を理解しようとする努力をします。<br />
  
    エビ型の人々は、新しい考えや経験を探求することにエネルギーを注ぎます。<br />
    また、彼らは感情に敏感で、他人の感情に対しても同情的で共感力があります。<br />
  
    一方、エビ型の人々は、ルーチンワークや詳細に対する注意が苦手なことがあります。<br />
    また、彼らは未来に向けて思考する傾向があり、その結果、現在の詳細や事実を見落とすことがあります。<br /><br />
  
    エビ型の人々は、他人の感情に敏感で、自分の感情を豊かに表現します。<br />
    また、他人が自分の考えや感情を理解し、受け入れてくれることを深く求めます。`,
    compatibleType: [
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '情熱的なデュオ',
        remark: '相互理解と親密さを追求',
        description:
          '情熱的で理解力のあるアナゴとエビは、相互理解と親密さを追求する関係性を築くことができます。',
      },
      {
        title: 'INFP',
        type: 'タコ',
        image: '/sushi/INFP.png',
        combination: '感情的なペア',
        remark: '感情の深さと情熱を共有',
        description:
          '感情的な深さを持つタコと情熱的なエビは、感情の深さと情熱を共有する関係性です。',
      },
      {
        title: 'INTP',
        type: 'タマゴ',
        image: '/sushi/INTP.png',
        combination: '思考と感情のバランス',
        remark: '深い思考と情熱を一緒に',
        description:
          '深い思考を持つタマゴと情熱的なエビは、深い思考と情熱を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '情熱と親密感のペア',
        remark: '親密さと情熱を追求',
        description:
          '親密さを追求するトロと情熱的なエビは、お互いに親密さと情熱を追求する組み合わせです。',
      },
      {
        title: 'ENTJ',
        type: 'ウニ',
        image: '/sushi/ENTJ.png',
        combination: '情熱的なリーダー',
        remark: '創造性と野心を一緒に',
        description:
          'リーダーシップを発揮するウニと情熱的なエビは、創造性と野心を一緒に追求する関係性を築くことができます。',
      },
      {
        title: 'INTJ',
        type: 'イカ',
        image: '/sushi/INTJ.png',
        combination: '理論と感情のバランス',
        remark: '計画的な思考と情熱を一緒に',
        description:
          '計画的な思考を持つイカと情熱的なエビは、計画的な思考と情熱を一緒に追求する関係性を築くことができます。',
      },
      {
        title: 'ISTJ',
        type: 'マグロ',
        image: '/sushi/ISTJ.png',
        combination: '感情と実用性のペア',
        remark: '情熱と堅実さを組み合わせ',
        description:
          '堅実なマグロと情熱的なエビは、情熱と堅実さを組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ESTJ',
        type: 'アワビ',
        image: '/sushi/ESTJ.png',
        combination: '活力と決断力のペア',
        remark: 'エネルギーと組織性を追求',
        description:
          '組織的なアワビと情熱的なエビは、エネルギーと組織性を追求する組み合わせです。',
      },
    ],
  },
  {
    title: 'ENTP',
    type: 'アジ',
    remark: '新しいアイデアの発見者',
    image: '/sushi/ENTP.png',
    description: `アジ型(ENTP)の人々は、極めて好奇心が強く、知識とアイデアに深い関心を持つ人々です。<br />
    彼らは問題解決と挑戦に向かって進むことを楽しむ傾向があります。そのため、一度何かに取り組み始めると、全力で挑戦し、最後までやり遂げます。<br />
  
    アジ型の人々は、常に新しい方法やアプローチを考えることが好きで、既存のやり方にとらわれることはほとんどありません。<br />
    そのため、彼らは創造的で革新的な思考を持つことが多く、これがアジ型の人々が新しいアイデアを次々に生み出す原動力となっています。<br />
  
    アジ型の人々は、他人とディスカッションをすることが好きで、自分のアイデアを自由に発表することに喜びを感じます。<br />
    彼らは人々の間で自分のアイデアを広め、それを改善するためのフィードバックを求めます。<br />
  
    しかし、その一方で、アジ型の人々は細部への注意力が欠けることがあり、また、新しいアイデアに引きつけられすぎて、古いプロジェクトを放置する傾向もあります。<br /><br />
  
    アジ型の人々は強い社交性を持ち、エネルギッシュで活動的です。そのため、人々と一緒にいるときには、よりエネルギッシュで創造的になることが多いです。<br />
    また、彼らは他人に対してとてもオープンで、新しい人々との出会いを楽しむことが多いです。`,
    compatibleType: [
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '革新的なデュオ',
        remark: 'アイデアと理解力を追求',
        description:
          '理解力のあるアナゴと革新的なアジは、新しいアイデアと深い理解を追求する関係性を築くことができます。',
      },
      {
        title: 'INFP',
        type: 'タコ',
        image: '/sushi/INFP.png',
        combination: '想像力と創造力のペア',
        remark: '創造性と深い感情を共有',
        description:
          '感情の深さを持つタコと創造的なアジは、想像力と創造力を結びつける関係性です。',
      },
      {
        title: 'INTP',
        type: 'タマゴ',
        image: '/sushi/INTP.png',
        combination: '思考とアイデアのバランス',
        remark: '深い思考と創造的なアイデアを一緒に',
        description:
          '深い思考を持つタマゴと創造的なアジは、深い思考と創造的なアイデアを組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '創造性と親密感のペア',
        remark: '親密さと新しいアイデアを追求',
        description:
          '親密さを追求するトロと創造的なアジは、お互いに親密さと新しいアイデアを追求する組み合わせです。',
      },
      {
        title: 'ENTJ',
        type: 'ウニ',
        image: '/sushi/ENTJ.png',
        combination: 'アイデアと行動力のデュオ',
        remark: '革新と実行力を追求',
        description:
          '行動力のあるウニと革新的なアジは、新しいアイデアと実行力を追求する関係性を築くことができます。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: '革新と実践的なペア',
        remark: '新しいアイデアと直感を共有',
        description:
          '実践的なサバと革新的なアジは、新しいアイデアと直感を結びつける関係性です。',
      },
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: 'アイデアと共感力のバランス',
        remark: '創造性と配慮を一緒に',
        description:
          '共感力を持つサーモンと革新的なアジは、創造性と配慮を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '創造性と感受性のペア',
        remark: '感受性と新しいアイデアを追求',
        description:
          '感受性を持つイクラと革新的なアジは、お互いに感受性と新しいアイデアを追求する組み合わせです。',
      },
    ],
  },
  {
    title: 'ESTJ',
    type: 'アワビ',
    remark: '強力なリーダー',
    image: '/sushi/ESTJ.png',
    description: `アワビ型(ESTJ)の人々は、強力なリーダーで、頼りがいがあり、実用的な思考を持っています。<br />
    彼らは事実に基づいた決定を下すことが好きで、物事を論理的で直接的な方法で解釈します。<br />
  
    アワビ型の人々は、伝統と体制を尊重し、明確なルールと期待を持つことを好む傾向があります。そのため、彼らはしっかりとした構造と秩序を持つ環境で最も効果的に機能します。<br />
  
    アワビ型の人々は、他人を率いることが得意で、自分たちの目標と価値観を強く持っています。<br />
    彼らは自分自身と他人に対して非常に要求が厳しく、自分の誠実さと信念に基づいて行動します。<br />
  
    しかし、その一方で、アワビ型の人々は自分の価値観を他人に押し付ける傾向があり、他人の意見や感情を無視することがあります。<br /><br />
  
    アワビ型の人々は、自分の意見を率直に伝えることが好きで、これが他人から見て厳しすぎると感じられることがあります。<br />
    また、彼らは自分自身や他人が高い基準を維持することを期待します。そのため、彼らは時々批判的で厳格に見えることがあります。`,
    compatibleType: [
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '効果的なリーダーシップ',
        remark: '理解と実用性を追求',
        description:
          '理解力のあるアナゴと実用的なアワビは、共感と実用性を組み合わせた効果的なリーダーシップを築くことができます。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: '論理と実用性のペア',
        remark: '問題解決と効率を共有',
        description:
          '問題解決能力を持つサバと実用的なアワビは、論理と実用性を結びつける強力な組み合わせです。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '頼りがいと忠実さのペア',
        remark: '信念と誠実さを持つ',
        description:
          '忠実なトロと頼りがいのあるアワビは、信念と誠実さを共有する関係性です。',
      },
      {
        title: 'INTJ',
        type: 'イカ',
        image: '/sushi/INTJ.png',
        combination: '戦略的な思考者',
        remark: '戦略と頼りがいを一緒に',
        description:
          '戦略的な思考を持つイカと頼りがいのあるアワビは、実用的な戦略を実行することができる強力な組み合わせです。',
      },
      {
        title: 'ENTP',
        type: 'アジ',
        image: '/sushi/ENTP.png',
        combination: '先導する革新者',
        remark: '新たな視点と実用性を追求',
        description:
          '新しいアイデアの発見者であるアジと実用的なアワビは、新たな視点と実用性を一緒に追求する関係性を築きます。',
      },
      {
        title: 'ESFP',
        type: 'ホタテ',
        image: '/sushi/ESFP.png',
        combination: '活気と実用性のペア',
        remark: 'エネルギーと実行力を共有',
        description:
          'エネルギッシュなホタテと実用的なアワビは、エネルギーと実行力を共有する楽しい関係性です。',
      },
      {
        title: 'ESTP',
        type: 'カニ',
        image: '/sushi/ESTP.png',
        combination: '現実主義者と行動主義者',
        remark: '即時行動と実用性を一緒に',
        description:
          '現実主義者であるカニと実用的なアワビは、即時行動と実用性を一緒に追求する強力な組み合わせです。',
      },
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: '情熱と組織力のペア',
        remark: 'エネルギーと実用性を共有',
        description:
          '情熱的なエビと実用的なアワビは、エネルギーと実用性を共有する活発な関係性です。',
      },
    ],
  },
  {
    title: 'ESFJ',
    type: 'サーモン',
    remark: '思いやりのあるケアギバー',
    image: '/sushi/ESFJ.png',
    description: `サーモン型(ESFJ)の人々は、非常に人間関係に敏感であり、他人の感情とニーズをすばやく察知します。<br />
    彼らは自分自身や他人が快適で幸せであることを大切にし、他人が必要としているサポートを提供することに熱心に取り組みます。<br />
  
    サーモン型の人々は、他人を思いやり、理解し、助けることに喜びを感じます。<br />
    彼らは他人から感謝や認識を受けることで充実感を感じ、これが彼らの行動の原動力となります。<br />
  
    しかし、その一方で、サーモン型の人々は自分自身のニーズを無視する傾向があり、自分自身の感情を他人に見せることを避けることがあります。<br /><br />
  
    サーモン型の人々は、他人から否定的なフィードバックを受けると深く傷つくことがあります。<br />
    彼らは自分自身や他人に対して高い期待を持つ傾向があり、自分自身や他人がこれらの期待を満たすことができないと、深く失望することがあります。`,
    compatibleType: [
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '感情的なサポーター',
        remark: '理解と共感を追求',
        description:
          '理解力のあるアナゴと思いやりのあるサーモンは、共感と理解を深める強い絆を持つことができます。',
      },
      {
        title: 'ISTJ',
        type: 'マグロ',
        image: '/sushi/ISTJ.png',
        combination: '実用と思いやりのペア',
        remark: '頼りがいと支援を共有',
        description:
          '頼りがいのあるマグロと思いやりのあるサーモンは、相互の支援と頼りがいを持つ組み合わせです。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '感情的な理解者',
        remark: '心のつながりと共感を持つ',
        description:
          '感情的な理解力を持つイクラと思いやりのあるサーモンは、深い心のつながりと共感を持つ関係性です。',
      },
      {
        title: 'INTP',
        type: 'タマゴ',
        image: '/sushi/INTP.png',
        combination: '思考と感情のバランス',
        remark: '理論と共感を一緒に',
        description:
          '深く考えるタマゴと感情的なサーモンは、理論と共感を組み合わせたバランスの良い関係性を築くことができます。',
      },

      {
        title: 'ENTP',
        type: 'アジ',
        image: '/sushi/ENTP.png',
        combination: '新しいアイデアの追求',
        remark: '創造性と柔軟性を共有',
        description:
          '新しいアイデアの追求者であるアジと思いやりのあるサーモンは、創造性と柔軟性を共有する関係性を築くことができます。',
      },
      {
        title: 'ESTP',
        type: 'ウニ',
        image: '/sushi/ESTP.png',
        combination: '行動とサポートのペア',
        remark: '行動力と思いやりを共有',
        description:
          '行動力のあるウニと思いやりのあるサーモンは、行動とサポートを共有する関係性です。',
      },
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: 'エネルギッシュなペア',
        remark: '活気と思いやりを共有',
        description:
          'エネルギッシュなエビと思いやりのあるサーモンは、活気と思いやりを共有する関係性です。',
      },
    ],
  },
  {
    title: 'ENFJ',
    type: 'アナゴ',
    remark: '情熱的なリーダー',
    image: '/sushi/ENFJ.png',
    description: `アナゴ型(ENFJ)の人々は、情熱的で親切で、他人に良い影響を与えようと努力します。<br />
    彼らは他人の感情やニーズを敏感に察知し、それに対応することに熱心です。また、彼らは他人の可能性を引き出すことに情熱を注ぎます。<br />
  
    アナゴ型の人々は、非常にコミュニケーション能力が高く、他人を理解し励ますことが得意です。<br />
    彼らは自分自身や他人が共感し合うことで成長できる環境を作ることを重視します。そのため、しばしば彼らは素晴らしいリーダーや教師となります。<br />
  
    しかし、その一方で、アナゴ型の人々は他人のために尽力するあまり、自分自身のニーズや感情を無視する傾向があります。<br /><br />
  
    アナゴ型の人々は、他人からの評価や承認を強く求め、否定的なフィードバックに対して敏感です。<br />
    彼らは自分自身や他人に対して高い期待を持ち、これらの期待が満たされないと深く失望することがあります。`,
    compatibleType: [
      {
        title: 'INFJ',
        type: 'ハマチ',
        image: '/sushi/INFJ.png',
        combination: '理想主義者デュオ',
        remark: '親密さと理想を追求',
        description:
          '理想主義者であるハマチとアナゴは、深い親密さと理想を追求する関係性を築くことができます。',
      },
      {
        title: 'ISFP',
        type: 'イクラ',
        image: '/sushi/ISFP.png',
        combination: '感情の理解者',
        remark: '感じる力と理解を共有',
        description:
          '感じる力を持つイクラと理解力のあるアナゴは、相互の感情を理解し、共感する深い絆を持つことができます。',
      },
      {
        title: 'INTP',
        type: 'タマゴ',
        image: '/sushi/INTP.png',
        combination: '理論と感情のバランス',
        remark: '理解と探求を一緒に',
        description:
          '理論を追求するタマゴと感情的なアナゴは、理解と探求のバランスを保つ関係性を築くことができます。',
      },
      {
        title: 'ESTJ',
        type: 'アワビ',
        image: '/sushi/ESTJ.png',
        combination: 'リーダーシップのペア',
        remark: '導きとサポートを共有',
        description:
          'リーダーシップを持つアワビとアナゴは、お互いに導きとサポートを提供し合う関係性です。',
      },

      {
        title: 'ENTP',
        type: 'アジ',
        image: '/sushi/ENTP.png',
        combination: '新しいアイデアの追求',
        remark: '創造性と柔軟性を共有',
        description:
          '新しいアイデアの追求者であるアジとアナゴは、創造性と柔軟性を共有する関係性を築くことができます。',
      },
      {
        title: 'ESTP',
        type: 'カニ',
        image: '/sushi/ESTP.png',
        combination: '行動とサポートのペア',
        remark: '行動力と共感を共有',
        description:
          '行動力のあるカニとアナゴは、行動とサポートを共有する関係性です。',
      },
      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: '活気とサポートのペア',
        remark: '活気と共感を共有',
        description:
          '活気に満ちたエビとアナゴは、活気とサポートを共有する関係性です。',
      },
    ],
  },
  {
    title: 'ENTJ',
    type: 'ウニ',
    remark: '果断な指導者',
    image: '/sushi/ENTJ.png',
    description: `ウニ型(ENTJ)の人々は、目標志向で果断、そして理論的な思考を好む傾向があります。<br />
    彼らは計画性と組織力に優れており、具体的な成果を上げることを重視します。また、自己信頼感が高く、自身の考えやアイデアに自信を持っています。<br />
  
    ウニ型の人々は、効率と論理性を重視し、物事を順序立てて整理することに優れています。<br />
    彼らはしばしば自然なリーダーシップを発揮し、周囲を指導・組織化することが得意です。<br />
  
    しかし、その一方で、ウニ型の人々は他人の感情や視点を無視する傾向があります。<br /><br />
  
    ウニ型の人々は、自己中心的になりやすく、自分の意見が常に正しいと信じがちです。<br />
    彼らは困難に立ち向かう強さを持っていますが、他人からの批判に対して敏感で、否定的なフィードバックを個人的な攻撃と捉えることがあります。`,
    compatibleType: [
      {
        title: 'INTJ',
        type: 'イカ',
        image: '/sushi/INTJ.png',
        combination: '思考型デュオ',
        remark: '論理と戦略を共有',
        description:
          '思考力を持つイカとウニは、論理的な思考と戦略的な視点を共有することができます。',
      },
      {
        title: 'ISTP',
        type: 'サバ',
        image: '/sushi/ISTP.png',
        combination: '現実的なペア',
        remark: '冷静さと効率性を追求',
        description:
          '現実的で冷静なサバと効率的なウニは、互いに冷静さと効率性を重視する関係性を築くことができます。',
      },
      {
        title: 'ESFP',
        type: 'ホタテ',
        image: '/sushi/ESFP.png',
        combination: '行動と指導のバランス',
        remark: '楽観性と指導力を一緒に',
        description:
          '楽観的で行動的なホタテと指導力を持つウニは、楽観性と指導力を組み合わせたバランスの良い関係性を築くことができます。',
      },
      {
        title: 'ISFJ',
        type: 'トロ',
        image: '/sushi/ISFJ.png',
        combination: '保護と導きのペア',
        remark: 'サポートとリーダーシップを共有',
        description:
          '保護とサポートを提供するトロとリーダーシップを持つウニは、お互いにサポートと導きを提供し合う関係性です。',
      },
      {
        title: 'ENFJ',
        type: 'アナゴ',
        image: '/sushi/ENFJ.png',
        combination: '情熱的なリーダーシップ',
        remark: '共感とサポートを追求',
        description:
          '情熱的なリーダーシップを持つアナゴとウニは、共感とサポートを追求する関係性を築くことができます。',
      },
      {
        title: 'ENTP',
        type: 'アジ',
        image: '/sushi/ENTP.png',
        combination: '新しいアイデアの追求',
        remark: '創造性と柔軟性を共有',
        description:
          '新しいアイデアの追求者であるアジとウニは、創造性と柔軟性を共有する関係性を築くことができます。',
      },

      {
        title: 'ENFP',
        type: 'エビ',
        image: '/sushi/ENFP.png',
        combination: '活気とサポートのペア',
        remark: '活気と共感を共有',
        description:
          '活気に満ちたエビとウニは、活気とサポートを共有する関係性です。',
      },
      {
        title: 'ESFJ',
        type: 'サーモン',
        image: '/sushi/ESFJ.png',
        combination: '思いやりのあるケアギバー',
        remark: '思いやりと協力を追求',
        description:
          '思いやりのあるケアギバーであるサーモンとウニは、思いやりと協力を追求する関係性を築くことができます。',
      },
    ],
  },
];
