//what this is; date, year.

#ifdef GL_ES
	precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution;

//helpers:
//if you operate on variables being passed, you must define them as inout otherwise it creates a copy for the function by default.
void flip(inout vec2 uv){
	uv.y = 1.0 - uv.y; 
}

void main(){
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;

	//flip:
	//flip(uv); 

	float r = uv.y; 
	float g = 0.0; 
	float b = 0.0; 
	float a = 1.0; 

	//output:
	gl_FragColor = vec4(r,g,b,a); 
}
