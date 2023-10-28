import type { NextApiRequest, NextApiResponse } from 'next';
import { google, sheets_v4 } from 'googleapis';

const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const private_key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Replace new line character
const spreadsheetId = process.env.SPREADSHEET_ID;

const googleSheets = google.sheets({ version: 'v4' });

const auth = new google.auth.JWT(client_email, undefined, private_key, [
  'https://www.googleapis.com/auth/spreadsheets',
]);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { data } = req.body;

    try {
      await auth.authorize();

      const request: sheets_v4.Params$Resource$Spreadsheets$Values$Append = {
        auth,
        spreadsheetId,
        range: '参加者', // Update this with your sheet name
        valueInputOption: 'RAW',
        requestBody: {
          values: [data],
        },
      };

      const response = await googleSheets.spreadsheets.values.append(request);

      const updatedRows = response.data.updates?.updatedRows;
      res.status(200).json({ updatedRows });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Error writing to Google Sheet' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
