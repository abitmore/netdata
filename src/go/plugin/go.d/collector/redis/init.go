// SPDX-License-Identifier: GPL-3.0-or-later

package redis

import (
	"errors"

	"github.com/netdata/netdata/go/plugins/plugin/go.d/agent/module"
	"github.com/netdata/netdata/go/plugins/plugin/go.d/pkg/tlscfg"

	"github.com/redis/go-redis/v9"
)

func (c *Collector) validateConfig() error {
	if c.Address == "" {
		return errors.New("'address' not set")
	}
	return nil
}

func (c *Collector) initRedisClient() (*redis.Client, error) {
	opts, err := redis.ParseURL(c.Address)
	if err != nil {
		return nil, err
	}

	tlsConfig, err := tlscfg.NewTLSConfig(c.TLSConfig)
	if err != nil {
		return nil, err
	}

	if opts.TLSConfig != nil && tlsConfig != nil {
		tlsConfig.ServerName = opts.TLSConfig.ServerName
	}

	if opts.Username == "" && c.Username != "" {
		opts.Username = c.Username
	}
	if opts.Password == "" && c.Password != "" {
		opts.Password = c.Password
	}

	opts.PoolSize = 1
	if tlsConfig != nil {
		opts.TLSConfig = tlsConfig
	}
	opts.DialTimeout = c.Timeout.Duration()
	opts.ReadTimeout = c.Timeout.Duration()
	opts.WriteTimeout = c.Timeout.Duration()

	return redis.NewClient(opts), nil
}

func (c *Collector) initCharts() (*module.Charts, error) {
	return redisCharts.Copy(), nil
}
