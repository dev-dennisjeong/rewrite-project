/**
 * feed.jsp
 */

HTMLCollection.prototype.forEach = Array.prototype.forEach;

const sortButton = document.getElementsByClassName("sortButton");
const sortText = document.getElementsByClassName("sortText");
const likeButton = document.querySelectorAll(".likeButton");
const heartImg = document.querySelector(".heartImg");
const emptyHeartImg = document.querySelector(".emptyHeartImg");
let temp = 0;

// 최신순, 인기순 버튼 누르면 폰트 변경
$(".sortButton").each((i, e) => {
	$(e).on("click", function(){
		$($(".sortText")[i]).css("fontWeight", 'bold');
	
		if(temp == i){
			return;
		}
		
		$($(".sortText")[temp]).css("fontWeight", 'normal');
		
		temp = i;
	});
});


/* 좋아요 클릭 이벤트 */
$(".likeButton").each((i, e) => {
	   $(e).on("click", function() {
	        var checkHeart = $($('.heartImg')[i]).css("display");
	        if(checkHeart == "none"){
	            $($('.heartImg')[i]).css("display", "block");
	            $($('.emptyHeartImg')[i]).css("display", "none");
	        } else {
	        	$($('.heartImg')[i]).css("display", "none");
	        	$($('.emptyHeartImg')[i]).css("display", "block");
	        }
	   })
	});
	
/*피드 목록 가져오기*/	
showFeedList();

function showFeedList(){
	
	feeds = JSON.parse(feeds);
	const $feedUl = $(".feedListWrapper .feedList");	
	
	let text = "";
	
	feeds.forEach( feed => {
		text += `<li>
					<div class="feedWrap">
						<div class="feed">
							<div class="feedThumbnail">
				`;				/*이미지 넣는 곳 src*/
		text +=	`				<span class="feedThumbnailSpan" ratio="0.75">
									<picture ratio="0.75" class="feedPicture">
										<source class="feedPictureSource" type="image/webp" sizes="(min-width: 1024px) 300px, 50vw" srcset=" https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/375xauto 375w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/750xauto 750w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/960xauto 960w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/1440xauto 1440w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/2048xauto 2048w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/2880xauto 2880w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/autoxauto 5120w " />
										<img class="feedImage" sizes="(min-width: 1024px) 300px, 50vw" srcset="https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/375xauto 375w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/750xauto 750w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/960xauto 960w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/1440xauto 1440w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/2048xauto 2048w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/2880xauto 2880w,https://cdn.class101.net/images/a787a840-b0c1-4ea5-b8f2-d280c954fc4e/autoxauto 5120w" src="https://cdn.class101.net/images/baf7ab7e-eba0-49ef-ab00-694a1574562d" alt="귀요미" />
									</picture>
								</span>
				`;				
		text += `				/*좋아요 버튼*/
								<div class="likeButtonWrap">
									<button type="button" icon-position="2" class="likeButton" color="transparent">
										<span class="likeButtonSpan"> <img class="emptyHeartImg" src="${pageContext.request.contextPath}/static/images/emptyHeart.png">
											<img class="heartImg" src="${pageContext.request.contextPath}/static/images/heart.png">
										</span>
									</button>
								</div>
				`;				
		text +=	`				/*지역 이름 넣기*/
								<div class="locationWrap">
									<div class="location" color="#FFF" backgroundcolor="#000">
										<div color="#FFF" class="locationText">서울</div>
									</div>
								</div>
							</div>	
				`;				
										
		text +=	`			<div class="feedInfo">
								<div class="feedNickname">
									/*닉네임*/
									<p class="feedNicknameText">귀요미</p>
								</div>
								/*태그*/
								<div class="feedHashTagWrap">
									<strong style="color: skyblue">#여행</strong> 
									<strong style="color: skyblue">#일상</strong> 
									<strong style="color: skyblue">#ootd</strong>
								</div>
								<div class="likeCountWrap">
									<div>
										<div class="likeCount">
											<div class="infoHeart">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
			                                        <path fill-rule="evenodd" d="M1.5 8.824C1.5 5.607 3.962 3 7 3c2.5 0 4 1.5 5 3 1-1.5 2.5-3 5-3 3.038 0 5.5 2.607 5.5 5.824C22.5 14.827 16.684 18.52 12 21 7.316 18.52 1.5 14.827 1.5 8.824z" fill="#d7d7d7">
													</path>
	                                      		</svg>
											</div>
											4884
										</div>
									</div>
								</div>
							</div>
							<div class="feedInfoMargin"></div>
							<div class="statusWrap">
								<div class="status">
									<p class="statusText">미혼</p>
								</div>
							</div>
						</div>
					</div>
				</li>
					`;
	});			
	 
	$feedUl.append(text);
}
	