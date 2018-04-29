
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        {id: 1, category_id: 1, title: 'Wondergarden 2017', date: 'Sat, 03 May 2014 01:42:04 +0000', content: " <p>We are coming into the festival season, and the first on my list is ...!</p><p>So at new years, all I ever want to do is dance to live music in the warm evening air! SO this year I'm going to WonderGarden down at Silo Park.</p><p>This year line up is a great collection of Kiwi Musicians.<br />I'm Most looking forward to seeing ...</p><iframe src='https://open.spotify.com/embed/user/banishedmusic/playlist/7qzk6kntbCzVZ91WdtMopR' width='300' height='380' frameborder='0' allowtransparency='true'></iframe><p>(If you have got plans already, don't worry watch this space for coverage of the festival)</p>"},
        {id: 2, category_id: 2, title: 'happy hour', date: '6/9/10', content: 'happpy'},
        {id: 4, category_id: 3, title: 'sup', date: '111', content: 'hello world'},
        {id: 5, category_id: 3, title: 'sup', date: '111', content: 'hello world'},
        {id: 6, category_id: 3, title: 'sup', date: '111', content: 'hello world'},
        {id: 7, category_id: 3, title: 'sup', date: '111', content: 'hello world'},
        {id: 8, category_id: 3, title: 'sup', date: '111', content: 'hello world'},
        {id: 9, category_id: 3, title: 'sup', date: '111', content: 'hello world'}
      ]);
    });
}
