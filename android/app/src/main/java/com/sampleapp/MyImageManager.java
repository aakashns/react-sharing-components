package com.sampleapp;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageManager;
import com.facebook.react.views.image.ReactImageView;

import javax.annotation.Nullable;

public class MyImageManager extends SimpleViewManager<ReactImageView> {
    public static final String REACT_CLASS = "MyImageView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    private final @Nullable AbstractDraweeControllerBuilder mControllerBuilder;
    private final @Nullable Object mCallerContext;

    public MyImageManager(
            AbstractDraweeControllerBuilder draweeControllerBuilder,
            Object callerContext) {
        mCallerContext = callerContext;
        mControllerBuilder = draweeControllerBuilder;
    }

    public MyImageManager() {
        mControllerBuilder = null;
        mCallerContext = null;
    }

    @ReactProp(name="src")
    public void setSrc(ReactImageView view, @Nullable String src) {
        view.setSource(src);
    }

    @ReactProp(name="borderRadius", defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }

    @Override
    protected ReactImageView createViewInstance(ThemedReactContext reactContext) {
        return new ReactImageView(
                reactContext,
                mControllerBuilder == null ?
                    Fresco.newDraweeControllerBuilder() : mControllerBuilder,
                mCallerContext);
    }

}
