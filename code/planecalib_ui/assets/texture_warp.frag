#ifdef GL_ES_VERSION_2_0
precision mediump float;
#endif

uniform sampler2D uTexture;
varying vec3 vTexCoord;

void main(void)
{
	gl_FragColor = texture2DProj(uTexture, vTexCoord);
}
