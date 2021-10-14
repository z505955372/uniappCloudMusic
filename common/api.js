import {
	baseUrl
} from "./config.js"
export function topList() {
	let listIds = ['19723756', '3779629', '2884035', '3778678']
	return new Promise((reslove, reject) => {

		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length = 4;
				for (var i = 0; i < result.length; i++) {
					result[i].listId = listIds[i];
				}
				reslove(result)
			},
			fail: (err) => {
				console.log(err);
			},
			complete: () => {}
		});
	})
}


// 
export function list(listId) {
	return uni.request({
		// 旧接口，idx已经废弃了
		// url: `${baseUrl}/top/list?idx=${listId}`,
		// 新接口，后台做了登录拦截！
		url: `${baseUrl}/playlist/detail?id=${listId}`,
		method: 'GET'
	});
}

// 音乐列表
export function songDetail(songId) {
	return uni.request({

		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET'
	});
}

// 相似歌曲
export function songSimi(songId) {
	return uni.request({

		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET'
	});
}


// 评论
export function songComment(songId) {
	return uni.request({

		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET'
	});
}

// 歌词
export function songLyric(songId) {
	return uni.request({
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET'
	});
}
// 音乐详情
export function songUrl(songId) {
	return uni.request({
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET'
	});
}
// 热门词
export function searchHot() {
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET'
	});
}

// 搜索结果

export function searchWord(word) {
	return uni.request({
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET'
	});
}

//提示文字

export function searchSuggest(word) {
	return uni.request({
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	});
}

// 搜索结果

// export function searchSuggest(word) {
// 	return uni.request({
// 		url: `${baseUrl}/search/suggest?keywords=${word}&type=moblie`,
// 		method: 'GET'
// 	});
// }

