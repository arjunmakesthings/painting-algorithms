//what this is; date, year.
//
#ifdef GL_ES
	precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution; 

void main(){
	//flip coordinates so that canvas in 0,0 at top-left.
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	uv.y = 1.0 - uv.y; 

	float r = 1.0; 
	float g = 1.0; 
	float b = 1.0; 
	float a = 1.0; 

	//output:
	gl_FragColor = vec4(r,g,b,a); 
}
