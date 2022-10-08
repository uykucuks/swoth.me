import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/swothh/repos', {
            headers: {
                'Authorization': 'token {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}'
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};
