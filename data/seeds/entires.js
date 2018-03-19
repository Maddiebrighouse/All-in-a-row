
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, category_id: 1, title: 'Wondergarden 2017', date: 'Sat, 03 May 2014 01:42:04 +0000', content: 
        <div>
          <hr />
        <img src="http://static1.squarespace.com/static/53608f78e4b0f06595c2c1ba/53608ffee4b06295cb16166d/5a32fa490d9297e4c9d1c680/1513290527277/Silo+%281+of+1%29.jpg" alt=""/>
        <p>We are coming into the festival season, and the first on my list is ...!</p><p>So at new years, all I ever want to do is dance to live music in the warm evening air! SO this year I'm going to WonderGarden down at Silo Park.</p><p>This year line up is a great collection of Kiwi Musicians.<br />I'm Most looking forward to seeing ...</p><iframe src="https://open.spotify.com/embed/user/banishedmusic/playlist/7qzk6kntbCzVZ91WdtMopR" width="300" height="380" frameborder="0" allowtransparency="true"></iframe><p>(If you have got plans already, don't worry watch this space for coverage of the festival)</p>
    
        <a href="https://www.chelseajade.co/"  target="_blank" ><img src="http://static1.squarespace.com/static/53608f78e4b0f06595c2c1ba/53608ffee4b06295cb16166d/5a347d95e4966b79a08bae3c/1513578832352/CHELSEAJADE_III.jpg" alt=""/></a>
        
        <p>I remember seeing <a target="_blank" href="https://www.chelseajade.co/">Chelsea</a> perform over the years but as 'Watercolours' at events like Huffer and RUBY, that is when I fell for her sound and passion. Her piece 'Life of the party' is on pretty much all my playlists.</p>
   
        <iframe src="//www.youtube.com/embed/ySxyBXCi2ww?wmode=opaque&amp;enablejsapi=1" height="480" width="854" scrolling="no" frameborder="0" allowfullscreen="">
        </iframe>
        
        <a href="http://unknownmortalorchestra.com/"  target="_blank" ><img src="http://static1.squarespace.com/static/53608f78e4b0f06595c2c1ba/53608ffee4b06295cb16166d/5a347d85f9619a424b360cc2/1513578857310/static1.squarespace.jpg.jpg?format=original" alt=""/></a>
    
  
        <p>This will be <a target="_blank" href="http://unknownmortalorchestra.com/">UMO's</a> only North island show this Summer. I saw these guys live at the Saint James, and it was just mesmerising, you can't miss them! So get your dancing shoes on.&nbsp;<br /> </p>
    
        <iframe src="//www.youtube.com/embed/PERf5un2nC0?wmode=opaque&amp;enablejsapi=1" height="480" width="854" scrolling="no" frameborder="0" allowfullscreen="">
        </iframe>
    
        <a href="https://soundcloud.com/theleisurecollective"  target="_blank" ><img src="http://static1.squarespace.com/static/53608f78e4b0f06595c2c1ba/53608ffee4b06295cb16166d/5a347daf0d92972a1957d0ef/1513578878769/LEISURE_Purp2017.jpg" alt=""/></a>
      
        <p>I have adored <a target="_blank" href="https://soundcloud.com/theleisurecollective">LESURE's</a> album and single 'Got it Bad'<br />but I've not yet seen LEISURE perform, so I'm pretty excited to see them.&nbsp;</p>
   
        <iframe src="//www.youtube.com/embed/WPfIbfBBtlQ?wmode=opaque&amp;enablejsapi=1" height="480" width="640" scrolling="no" frameborder="0" allowfullscreen="">
        </iframe>
   
        <a href="https://www.nadiareid.com/"  target="_blank" ><img src="http://static1.squarespace.com/static/53608f78e4b0f06595c2c1ba/53608ffee4b06295cb16166d/5a347d74085229e36dbe9033/1513578982350/static1.squarespace-1.jpg-1.jpg?format=original" alt=""/></a>
    
  
        <p>The first time I saw <a target="_blank" href="https://www.nadiareid.com/">Nadia Reid</a> was while I was shooting at the 2016 Laneways. I was milling around between acts when from around the corner I heard 'Call The Days As They Were Known', I've followed Nadia's journey since. I'm Lucky enough to see her and photograph her again this new year.&nbsp;</p>
   
        <iframe src="//www.youtube.com/embed/y_Yt-_DS3bI?wmode=opaque&amp;enablejsapi=1" height="480" width="854" scrolling="no" frameborder="0" allowfullscreen="">
        </iframe>
   
        <p>All Pictures of Artist were sourced from <a target="_blank" href="https://www.wondergarden.co.nz/">Wondergarden</a>.</p>
        </div> },
        {id: 2, category_id: 2, title: '', date: '', content: ''},
        {id: 3, category_id: 3, title: '', date: '', content: ''}
      ]);
    });
}
