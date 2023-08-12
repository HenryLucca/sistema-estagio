import { NextApiRequest, NextApiResponse } from 'next';
import { connectToUserDataDB } from '@/backend/mongodb/connect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        res.status(405).json({ message: 'Only GET requests allowed' })
    }

    const uid = req.query.uid;
    const db = await connectToUserDataDB();

    const studentCollection = db.collection('Students');
    const student = await studentCollection.findOne({ uid: uid });

    if(student){
        res.status(200).json(student);
    } else {
        const coordCollection = db.collection('Coordinators');
        const coord = await coordCollection.findOne({ uid: uid });
        if(coord){
            res.status(200).json(coord);
        } else{
            const companiesCollection = db.collection('Companies');
            const company = await companiesCollection.findOne({ uid: uid });
            if(company){
                res.status(200).json(company);
            }
            else{
                // send user to register page to setup their account
                res.status(404).json({ message: 'User not found.' });
            }
        }
    }
    
}