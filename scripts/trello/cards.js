async function postComment(cardId, text, { trelloApiKey, trelloOAuth1 } = {}) {
    return new TrelloClient({ trelloApiKey, trelloOAuth1 }).post(`cards/${cardId}/actions/comments`, { text });
}
async function getCard(cardId, { trelloApiKey, trelloOAuth1 } = {}) {
    return new TrelloClient({ trelloApiKey, trelloOAuth1 }).get(`cards/${cardId}`);
}
async function updateCard(cardId, { name, pos }, { trelloApiKey, trelloOAuth1 } = {}) {
    return new TrelloClient({ trelloApiKey, trelloOAuth1 }).put(`cards/${cardId}`, { name, pos });
}
