<view className="input-container">
      <input
        className="input"
        placeholder="Search games..."
        onInput={(e) => console.log('User typed:', e.detail.value)}
      />

        <view
          className="button">
          <image src={searchIcon} className="search-icon" />
        </view>
      </view>