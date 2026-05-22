//get a brush to move; may, 2026. 
//
#ifdef GL_ES
	precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution;
uniform float u_time;

bool pick = true; //switch to pick a random point. 

void main(){
	//flip coordinates so that canvas in 0,0 at top-left.
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	uv.y = 1.0 - uv.y;

	float r = 1.0; 
	float g = 1.0; 
	float b = 1.0; 
	float a = 1.0;

	//pick a random point to start a stroke on:
	if (pick){
		vec2 xy = ();
	}

	if (uv.x < 0.5){
		r = 0.0; 
	}
	else{
		r = 1.0; 
	}

	//output:
	gl_FragColor = vec4(r,g,b,a); 
}
