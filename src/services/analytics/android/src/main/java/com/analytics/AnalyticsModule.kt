package com.analytics

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.UiThreadUtil.runOnUiThread

class AnalyticsModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun initialize(promise: Promise) {
    runOnUiThread {
      // Simulate a heavy initialization on UI thread
      var sum = 0L
      for (i in 1..500_000_000) {
        sum += i
      }
    }
    promise.resolve(true)
  }

  companion object {
    const val NAME = "Analytics"
  }
}
