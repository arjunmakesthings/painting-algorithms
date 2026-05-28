//make a bristle move over time; 260528. 

#ifdef GL_ES
	precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution;
uniform float u_time;
uniform int u_frame; 

uniform sampler2D u_doubleBuffer0; 

//helpers:
//if you operate on variables being passed, you must define them as inout otherwise it creates a copy for the function by default.
void flip(inout vec2 uv){
	uv.y = 1.0 - uv.y; 
}

void main(){
	vec2 pos = gl_FragCoord.xy; 
	vec2 uv = pos.xy / u_resolution.xy;

	//flip:
	flip(uv);

	vec3 color = vec3(0.0);

	//brush stuff: 
	vec2 brush_pos = vec2(0.5, 0.5); //in the middle.
	float size = 20.0/ u_resolution.x * u_resolution.y;

	float d = distance(uv, brush_pos);

	//starting state: 
	if (u_frame<10){
		//vec2 col = step(d, mod(pos / size, 2.0));

		if (d < size){
			color = vec3(1.0); 
		}else{
			color = vec3(1.0,0.0,0.0); 
		}

		//vec2 col = step(size, uv); 

	//color = vec3(col.x * col.y); 
	}
	else{

#ifdef DOUBLE_BUFFER_0
		//compute here:
		//get history for each pixel. 
		vec4 prev = texture2D(u_doubleBuffer0, uv).rgba; 
		color = vec3(prev.rgb); 


#else
		//show buffer as is:
		color = texture2D(u_doubleBuffer0, uv).rgb; 

#endif
	}
		//output:
		gl_FragColor = vec4(color, 1.0); 
}
