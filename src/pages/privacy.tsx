import React from 'react';
import { Box, Typography } from '@mui/material';

import Link from 'next/link';
import { NextSeo } from 'next-seo';

function PrivacyPage() {
  return (
    <>
      <NextSeo
        title="当サイトのプライバシーポリシー"
        description="当サイトのプライバシーポリシーについての情報です。"
      />
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          textAlign: 'center',
          color: '#000',
          gap: 3,
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.4rem' } }}
        >
          プライバシーポリシー
        </Typography>
        <Box
          sx={{
            width: '80%',
            textAlign: 'start',
          }}
        >
          <Typography variant="h2" sx={{ fontSize: '1.2rem', my: 2 }}>
            当サイトの運営者情報
          </Typography>
          <Typography>運営者：おすし</Typography>
          <Typography>サイト名：おすし性格診断</Typography>
          <Typography>サイトURL：https://www.osushi.life/</Typography>
          <Typography>連絡先：info.homehomeai@gmail.com</Typography>

          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            初出掲載日・最終改定日
          </Typography>
          <Typography>初出掲載日：2023年7月10日</Typography>
          <Typography>最終改定日：2023年7月16日</Typography>

          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            個人情報の利用目的
          </Typography>
          <Typography>
            当サイトでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
          </Typography>

          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            個人情報の第三者への開示
          </Typography>
          <Typography>
            当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
          </Typography>
          <ul>
            <li>本人のご了解がある場合</li>
            <li>法令等への協力のため、開示が必要となる場合</li>
          </ul>

          <Typography variant="h4" sx={{ fontSize: '1.2rem', my: 2 }}>
            個人情報の開示、訂正、追加、削除、利用停止
          </Typography>
          <Typography>
            ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。
          </Typography>

          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            広告の配信について
          </Typography>
          <Typography>
            当サイトでは、第三者配信の広告サービス「
            <Link
              href="https://www.google.co.jp/adsense/start/"
              target="_blank"
            >
              Google Adsense グーグルアドセンス
            </Link>
            」「
            <Link href="https://www.a8.net/" target="_blank">
              A8.net
            </Link>
            」を利用しています。
            このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
            Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は「
            <Link
              href="https://policies.google.com/technologies/ads?hl=ja"
              target="_blank"
            >
              広告 – ポリシーと規約 – Google
            </Link>
            」をご覧ください。
          </Typography>

          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            アクセス解析ツールについて
          </Typography>
          <Typography>
            当サイトでは、Googleによるアクセス解析ツール「
            <Link
              href="https://marketingplatform.google.com/intl/ja/about/analytics/"
              target="_blank"
            >
              Googleアナリティクス
            </Link>
            」を利用しています。
            このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しています。
            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            この機能はクッキー（Cookie）を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            この規約に関して、詳しくは
            <Link
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              target="_blank"
            >
              こちら
            </Link>
            をクリックしてください。
          </Typography>

          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            当サイトへのコメントについて
          </Typography>
          <Typography>
            当サイトへのコメントを残す際に、IPアドレスを収集しています。
            これはサイトの標準機能としてサポートされている機能で、スパムや荒らしへの対応以外にこのIPアドレスを使用することはありません。
            なお、全てのコメントは管理人が事前にその内容を確認し、承認した上での掲載となります。
            あらかじめご了承ください。
            なお、次の各号に掲げる内容を含むコメントは管理人の裁量によって承認せず、削除する事があります。
          </Typography>
          <ul>
            <li>特定の自然人または法人を誹謗し、中傷するもの。</li>
            <li>極度にわいせつな内容を含むもの。</li>
            <li>
              禁制品の取引に関するものや、他者を害する行為の依頼など、法律によって禁止されている物品、行為の依頼や斡旋などに関するもの。
            </li>
            <li>
              その他、公序良俗に反し、または管理人によって承認すべきでないと認められるもの。
            </li>
          </ul>
          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            お問い合わせフォームについて
          </Typography>
          <Typography>
            当サイトでは、お問い合わせフォームからお問い合わせいただく際に、お名前とメールアドレス等の個人情報をご登録いただいています。
            これらの個人情報は質問に対する回答を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
          </Typography>

          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            著作権・肖像権について
          </Typography>
          <Typography>
            当サイトで掲載している文章や画像などにつきましては、著作権は放棄しておりません。
            当サイトに存在する、文章・画像・動画等の著作物の情報を無断転載することを禁止します。
            引用の範囲を超えるものについては、法的処置を行います。
            転載を希望される方は、「お問い合わせ」よりご連絡をお願いします。
            また、当サイトは著作権の侵害を目的とするものではありません。
            使用している版権物の知的所有権はそれぞれの著作者・団体に帰属しております。
            著作権や肖像権に関して問題がありましたら御連絡下さい。
            著作権所有者様からの警告及び修正・撤去のご連絡があった場合は迅速に対処または削除致します。
          </Typography>

          <Typography variant="h3" sx={{ fontSize: '1.2rem', my: 2 }}>
            リンクについて
          </Typography>
          <Typography>
            当サイトは基本的にリンクフリーです。
            リンクを行う場合の許可や連絡は不要です。
            ただし、当サイトに掲載されている画像への直リンクや、インラインフレームによる当サイトのコンテンツの使用はご遠慮ください。
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.2rem', my: 2 }}>
            当サイトの免責事項
          </Typography>
          <Typography>
            当サイトは、アフィリエイトプログラムを使って商品を紹介しており、直接の販売は行っておりません。
            商品に関するお問い合わせは、販売店様のほうに直接ご連絡くださいますようお願い致します。
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            また、リンク先サイトの正確性や合法性、その内容について一切保証するものではありません。
            当サイトに関する記事は、個人的な主観をもとに書いており、すべての人に当てはまるというものではありません。
            商品やサービスのご購入に関する最終的な判断はご自身の責任でお願い致します。
            当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、必ずしもそれらの正確性や安全性等を保証するものではありません。
            誤情報が入り込んだり、情報が古くなっていることもございます。
            万が一、当サイトに掲載された内容によって発生したトラブルや損害等の一切の責任を負いかねます。
            あらかじめご了承くださいますようお願いいたします。
            また、本免責事項、および当サイトに掲載しているすべての記事は、予告なしに変更・削除されることがあります。
            予めご了承ください。
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.2rem', my: 2 }}>
            当サイトのプライバシーポリシー・免責事項の変更について
          </Typography>
          <Typography>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシー及び免責事項の内容を適宜見直しその改善に努めます。
            修正された最新のプライバシーポリシーと免責事項は常に本ページにて開示されます。
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default PrivacyPage;
