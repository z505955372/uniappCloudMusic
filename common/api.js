import { baseUrl } from "./config.js"
export function topList(){
	 return new Promise((reslove,reject)=>{
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result =res.data.list;
				result.length = 4;
				reslove(result)
			},
			fail: () => {},
			complete: () => {}
		});
	})

}