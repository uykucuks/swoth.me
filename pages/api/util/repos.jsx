import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/swothh/repos', {
            headers: {
                'Authorization': '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'
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};
